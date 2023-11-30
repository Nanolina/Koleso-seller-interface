export interface IDocumentsState {
  companyRegistrationNumber: string;
  taxNumber: string;
  registrationCertificate: string;
  certificateDirectorsAndSecretary: string;
  certificateRegisteredOffice: string;
}

export interface IAccountDataState {
  IBAN: string;
  SWIFT: string;
  holderName: string;
  bankName: string;
  accountNumber: string;
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

export interface IAccountDataFormReturn {
  handleChange: (
    key: keyof IAccountDataState
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}
