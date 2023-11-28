import { combineReducers } from 'redux';
import {
  IProductCreationState,
  IProductCreationStringsState,
} from '../modules/productForm';
import productCreationSlice from './slices/productCreationSlice';
import productCreationStringsSlice from './slices/productCreationStringsSlice';

export interface RootState {
  productCreationStrings: IProductCreationStringsState;
  productCreation: IProductCreationState;
}

const rootReducer = combineReducers({
  productCreationStrings: productCreationStringsSlice,
  productCreation: productCreationSlice,
});

export default rootReducer;
