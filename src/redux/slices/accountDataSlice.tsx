import { IAccountDataState } from '../../modules/documentsForm';
import { createValueReducers } from '../sliceHelpers';

const accountDataSlice = createValueReducers({
  IBAN: '',
  SWIFT: '',
  holderName: '',
  bankName: '',
  accountNumber: '',
} as IAccountDataState);

export default accountDataSlice.reducer;
export const { setValue: setValueAccountData } = accountDataSlice.actions;
