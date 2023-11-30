import { IDocumentsState } from '../../modules/documentsForm';
import { createValueReducers } from '../sliceHelpersDocuments';

const documentsSlice = createValueReducers({
  companyRegistrationNumber: '',
  taxNumber: '',
  registrationCertificate: '',
  certificateDirectorsAndSecretary: '',
  certificateRegisteredOffice: '',
} as IDocumentsState);

export default documentsSlice.reducer;
export const { setValue: setValueDocuments } = documentsSlice.actions;
