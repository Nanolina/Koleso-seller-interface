import { ICreateOrganizationData } from './types';

export const initialValues: ICreateOrganizationData = {
  name: '',
  TIN: '',
  documents: {
    Passport: '',
    CertificateOfRegistration: '',
    CertificateOfDirectorsAndSecretary: '',
    CertificateOfRegisteredOffice: '',
    CertificateOfShareholders: '',
    CertificateTaxResidency: '',
  },
};
