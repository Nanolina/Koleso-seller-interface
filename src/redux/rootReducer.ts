import { combineReducers } from 'redux';
import { IProductCreationState } from '../types';
import productCreationSlice from './slices/productCreationSlice';

export interface RootState {
  productCreation: IProductCreationState;
}

const rootReducer = combineReducers({
  productCreation: productCreationSlice,
});

export default rootReducer;
