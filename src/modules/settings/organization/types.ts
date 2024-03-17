import { FormikProps } from 'formik';

export enum DocumentType {
  Passport = 'Passport',
  CertificateOfRegistration = 'CertificateOfRegistration',
  CertificateOfDirectorsAndSecretary = 'CertificateOfDirectorsAndSecretary',
  CertificateOfRegisteredOffice = 'CertificateOfRegisteredOffice',
  CertificateOfShareholders = 'CertificateOfShareholders',
  CertificateTaxResidency = 'CertificateTaxResidency',
}

export interface IDocuments {
  Passport: string | null;
  CertificateOfRegistration: string | null;
  CertificateOfDirectorsAndSecretary: string | null;
  CertificateOfRegisteredOffice: string | null;
  CertificateOfShareholders: string | null;
  CertificateTaxResidency: string | null;
}

export interface ICreateOrganizationData {
  name: string;
  TIN: string;
  documents: IDocuments;
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
  setPreview: (value: string | null) => void;
}

export interface IOrganizationState {
  organization: IOrganization;
  success: string | null;
  loading: boolean;
  error: any;
}

export interface IUpdateOrganizationArg {
  id: string;
  organizationFormData: FormData;
}
