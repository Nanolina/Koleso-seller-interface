import { combineReducers } from 'redux';
import { IUserState } from '../modules/auth';
import { IAccountDataState, IDocumentsState } from '../modules/documentsForm';
import {
  IProductCreationState,
  IProductCreationStringsState,
} from '../modules/productForm';
import { IStoresState } from '../modules/stores';
import accountDataSlice from './slices/accountDataSlice';
import documentsSlice from './slices/documentsSlice';
import productCreationSlice from './slices/productCreationSlice';
import productCreationStringsSlice from './slices/productCreationStringsSlice';
import storesSlice from './slices/storesSlice';
import userSlice from './slices/userSlice';

export interface IRootState {
  productCreationStrings: IProductCreationStringsState;
  productCreation: IProductCreationState;
  documents: IDocumentsState;
  accountData: IAccountDataState;
  user: IUserState;
  stores: IStoresState;
}

const rootReducer = combineReducers({
  productCreationStrings: productCreationStringsSlice,
  productCreation: productCreationSlice,
  documents: documentsSlice,
  accountData: accountDataSlice,
  user: userSlice,
  stores: storesSlice,
});

export default rootReducer;
