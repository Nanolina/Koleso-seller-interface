import { IOrganizationState } from '../../modules/settings/organization';

const documentsInitialState = {
  Passport: '',
  CertificateOfRegistration: '',
  CertificateOfDirectorsAndSecretary: '',
  CertificateOfRegisteredOffice: '',
  CertificateOfShareholders: '',
  CertificateTaxResidency: '',
};

const organizationDataInitialState = {
  id: '',
  founderId: '',
  name: '',
  TIN: '',
  documents: documentsInitialState,
};

export const organizationInitialState: IOrganizationState = {
  organization: organizationDataInitialState,
  loading: false,
  success: null,
  error: null,
};
