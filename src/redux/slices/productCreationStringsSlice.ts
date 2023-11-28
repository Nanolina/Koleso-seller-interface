import { IProductCreationStringsState } from '../../modules/productForm';
import { createValueReducers } from '../sliceHelpers';

const productCreationStringsSlice = createValueReducers({
  title: '',
  brand: '',
  model: '',
  articleSupplier: '',
  gender: '',
  section: '',
  category: '',
  subcategory: '',
} as IProductCreationStringsState);

export default productCreationStringsSlice.reducer;
export const {
  setValue: setValueProductCreationStrings,
  resetValue: resetValueProductCreationStrings,
} = productCreationStringsSlice.actions;
