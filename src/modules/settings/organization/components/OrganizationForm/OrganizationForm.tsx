import { unwrapResult } from '@reduxjs/toolkit';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { InputLabel } from '../../../../../components/InputLabel/InputLabel';
import { Loader } from '../../../../../components/Loader/Loader';
import { MessageBox } from '../../../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../../../redux/rootReducer';
import { AppDispatch } from '../../../../../redux/store';
import {
  handleCreateOrganization,
  handleUpdateOrganization,
} from '../../../../../redux/thunks/organization';
import { Button } from '../../../../../ui/Button/Button';
import { formatErrors } from '../../../../../utils';
import { initialValues } from '../../initialValues';
import {
  DocumentType,
  ICreateOrganizationData,
  IOrganization,
} from '../../types';
import { validationSchema } from '../../validationSchema';
import { DocumentUpload } from '../DocumentUpload/DocumentUpload';

export const OrganizationForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { organizationId, loading, error, success } = useSelector(
    (state: IRootState) => state.user
  );

  const [previews, setPreviews] = useState<any>({});
  const setPreview = (type: string, value: string | null) =>
    setPreviews((prev: any) => ({ ...prev, [type]: value }));

  const onSubmit = async (values: ICreateOrganizationData) => {
    const { name, TIN, documents } = values;
    const organizationFormData = new FormData();
    organizationFormData.append('name', name);
    organizationFormData.append('TIN', TIN);
    organizationFormData.append('Passport', documents.Passport);
    organizationFormData.append(
      'CertificateOfRegistration',
      documents.CertificateOfRegistration
    );
    organizationFormData.append(
      'CertificateOfDirectorsAndSecretary',
      documents.CertificateOfDirectorsAndSecretary
    );
    organizationFormData.append(
      'CertificateOfRegisteredOffice',
      documents.CertificateOfRegisteredOffice
    );
    organizationFormData.append(
      'CertificateOfShareholders',
      documents.CertificateOfShareholders
    );
    organizationFormData.append(
      'CertificateTaxResidency',
      documents.CertificateTaxResidency
    );

    let data;
    if (organizationId) {
      data = await dispatch(
        handleUpdateOrganization({
          id: organizationId,
          organizationFormData,
        })
      );

      // Get data from DB
      const organization: IOrganization = unwrapResult(data);

      // Set initial values
      if (organization) {
        console.log('ogrganization', organization);
      }
    } else {
      data = await dispatch(handleCreateOrganization(organizationFormData));

      // Get data from DB
      const organization: IOrganization = unwrapResult(data);

      // Set initial values
      if (organization) {
        console.log('ogrganization', organization);
      }
    }
  };

  if (loading) return <Loader />;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={() => validationSchema(t)}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values, errors, touched, dirty, setFieldValue, isValid }) => (
        <Form className="formFieldsContainer">
          <InputLabel
            label={t('settings.organization.name')}
            id="name"
            name="name"
            value={values.name}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            required
          />
          <InputLabel
            label={t('settings.organization.TIN')}
            id="TIN"
            name="TIN"
            value={values.TIN}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
          />

          {Object.entries(DocumentType).map(([key, value]) => (
            <DocumentUpload
              key={key}
              name={value}
              label={t(`settings.organization.documents.${value}`)}
              setFieldValue={setFieldValue}
              preview={previews[value]}
              setPreview={(filePreview: any) => setPreview(value, filePreview)}
            />
          ))}

          <div className="buttonSaveItemContainer">
            <Button
              text={t('save')}
              type="submit"
              disabled={!isValid || !dirty}
              tooltipText={formatErrors(errors)}
            />
          </div>

          {error && <MessageBox errorMessage={error} />}
          {success && <MessageBox successMessage={success} />}
        </Form>
      )}
    </Formik>
  );
};
