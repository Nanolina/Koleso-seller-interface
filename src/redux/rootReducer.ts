import { combineReducers } from 'redux';
import { IProductCreationState, IProductCreationStringsState } from '../types';
import productCreationStringsSlice from './slices/productCreationStringsSlice';
import productCreationSlice from './slices/productCreationSlice';

export interface RootState {
  productCreationStrings: IProductCreationStringsState;
  productCreation: IProductCreationState;
}

const rootReducer = combineReducers({
  productCreationStrings: productCreationStringsSlice,
  productCreation: productCreationSlice,
});

export default rootReducer;
