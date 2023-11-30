import { combineReducers } from 'redux';
import { IAccountDataState, IDocumentsState } from '../modules/documentsForm';
import {
  IProductCreationState,
  IProductCreationStringsState,
} from '../modules/productForm';
import accountDataSlice from './slices/accountDataSlice';
import documentsSlice from './slices/documentsSlice';
import productCreationSlice from './slices/productCreationSlice';
import productCreationStringsSlice from './slices/productCreationStringsSlice';

export interface RootState {
  productCreationStrings: IProductCreationStringsState;
  productCreation: IProductCreationState;
  documents: IDocumentsState;
  accountData: IAccountDataState;
}

const rootReducer = combineReducers({
  productCreationStrings: productCreationStringsSlice,
  productCreation: productCreationSlice,
  documents: documentsSlice,
  accountData: accountDataSlice,
});

export default rootReducer;
