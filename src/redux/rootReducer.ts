import { combineReducers } from 'redux';
import { IDocumentsState } from '../modules/documentsForm';
import {
  IProductCreationState,
  IProductCreationStringsState,
} from '../modules/productForm';
import documentsSlice from './slices/documentsSlice';
import productCreationSlice from './slices/productCreationSlice';
import productCreationStringsSlice from './slices/productCreationStringsSlice';

export interface RootState {
  productCreationStrings: IProductCreationStringsState;
  productCreation: IProductCreationState;
  documents: IDocumentsState;
}

const rootReducer = combineReducers({
  productCreationStrings: productCreationStringsSlice,
  productCreation: productCreationSlice,
  documents: documentsSlice,
});

export default rootReducer;
