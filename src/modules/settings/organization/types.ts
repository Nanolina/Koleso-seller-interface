import { FormikProps } from 'formik';
import { SetStateAction } from '../../../types';

export enum DocumentType {
  Passport = 'Passport',
  CertificateOfRegistration = 'CertificateOfRegistration',
  CertificateOfDirectorsAndSecretary = 'CertificateOfDirectorsAndSecretary',
  CertificateOfRegisteredOffice = 'CertificateOfRegisteredOffice',
  CertificateOfShareholders = 'CertificateOfShareholders',
  CertificateTaxResidency = 'CertificateTaxResidency',
}

interface IDocument {
  id: string;
  type: DocumentType;
  url: string;
  publicId: string;
  organizationId: string;
}

export interface ICreateOrganizationData {
  name: string;
  TIN: string;
  documents: {
    Passport: File | string;
    CertificateOfRegistration: File | string;
    CertificateOfDirectorsAndSecretary: File | string;
    CertificateOfRegisteredOffice: File | string;
    CertificateOfShareholders: File | string;
    CertificateTaxResidency: File | string;
  };
}

export interface IOrganization extends ICreateOrganizationData {
  id: string;
  founderId: string;
}

export interface IDocumentUploadProps {
  name: DocumentType;
  label: string;
  setFieldValue: FormikProps<any>['setFieldValue'];
  preview: string | null;
  setPreview: SetStateAction<string | null>;
}
