import { TFunction } from 'i18next';
import * as Yup from 'yup';

const fileValidationSchema = (
  type: string,
  t: TFunction<'translation', undefined>
) =>
  Yup.mixed()
    .test(
      'fileSize',
      t('settings.organization.documents.validation.veryBigSize', {
        type,
      }),
      (value: any) =>
        value == null ||
        typeof value === 'string' ||
        (value && value.size <= 512000) // 500 MB
    )
    .test(
      'fileFormat',
      t('settings.organization.documents.validation.notFormat', {
        type,
      }),
      (value: any) =>
        value == null ||
        typeof value === 'string' ||
        (value &&
          [
            'image/jpeg',
            'image/png',
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          ].includes(value.type))
    );

export const validationSchema = (t: TFunction<'translation', undefined>) =>
  Yup.object({
    name: Yup.string().required(
      t('settings.organization.documents.validation.nameRequired')
    ),
    documents: Yup.object().shape({
      Passport: fileValidationSchema(
        t('settings.organization.documents.Passport'),
        t
      ),
      CertificateOfRegistration: fileValidationSchema(
        t('settings.organization.documents.CertificateOfRegistration'),
        t
      ),
      CertificateOfDirectorsAndSecretary: fileValidationSchema(
        t('settings.organization.documents.CertificateOfDirectorsAndSecretary'),
        t
      ),
      CertificateOfRegisteredOffice: fileValidationSchema(
        t('settings.organization.documents.CertificateOfRegisteredOffice'),
        t
      ),
      CertificateOfShareholders: fileValidationSchema(
        t('settings.organization.documents.CertificateOfShareholders'),
        t
      ),
      CertificateTaxResidency: fileValidationSchema(
        t('settings.organization.documents.CertificateTaxResidency'),
        t
      ),
    }),
  });
