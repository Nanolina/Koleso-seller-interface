export interface IDocumentsState {
  companyRegistrationNumber: string;
  taxNumber: string;
  registrationCertificate: string;
  certificateDirectorsAndSecretary: string;
  certificateRegisteredOffice: string;
}

export type ISetValuePayloadDocuments = {
  key: keyof IDocumentsState;
  value: any;
};

export interface IDocumentsFormReturn {
  handleChange: (
    key: keyof IDocumentsState
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}
