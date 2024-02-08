import { combineReducers } from 'redux';
import { IUserState } from '../modules/auth';
import { IAccountDataState, IDocumentsState } from '../modules/documentsForm';
import { IProductsState } from '../modules/product';
import {
  IProductCreationState,
  IProductCreationStringsState,
} from '../modules/productForm';
import { IStoresState } from '../modules/stores';
import accountDataSlice from './slices/accountDataSlice';
import documentsSlice from './slices/documentsSlice';
import productCreationSlice from './slices/productCreationSlice';
import productCreationStringsSlice from './slices/productCreationStringsSlice';
import productsSlice from './slices/productsSlice';
import storesSlice from './slices/storesSlice';
import userSlice from './slices/userSlice';

export interface IRootState {
  productCreationStrings: IProductCreationStringsState;
  productCreation: IProductCreationState;
  documents: IDocumentsState;
  accountData: IAccountDataState;
  user: IUserState;
  stores: IStoresState;
  products: IProductsState;
}

const rootReducer = combineReducers({
  productCreationStrings: productCreationStringsSlice,
  productCreation: productCreationSlice,
  documents: documentsSlice,
  accountData: accountDataSlice,
  user: userSlice,
  stores: storesSlice,
  products: productsSlice,
});

export default rootReducer;
