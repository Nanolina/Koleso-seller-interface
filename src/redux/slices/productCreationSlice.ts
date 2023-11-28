import { IProductCreationState } from '../../types';
import { createValueReducers } from '../sliceHelpers';

const productCreationSlice = createValueReducers({
  title: '',
  brand: '',
  model: '',
  articleSupplier: '',
  gender: '',
} as IProductCreationState);

export default productCreationSlice.reducer;
export const {
  setValue: setValueProductCreation,
  resetValue: resetValueProductCreation,
} = productCreationSlice.actions;
