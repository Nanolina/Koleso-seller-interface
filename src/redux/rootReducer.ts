import { combineReducers } from 'redux';
import { IUserState } from '../modules/auth';
import { IMenuState } from '../modules/menu';
import {
  ICatalogStructureState,
  IProductsState,
} from '../modules/product/productForm';
import { IVariantsState } from '../modules/product/variantForm';
import { IStoresState } from '../modules/stores';
import catalogStructureSlice from './slices/catalogStructureSlice';
import menuSlice from './slices/menuSlice';
import productsSlice from './slices/productsSlice';
import storesSlice from './slices/storesSlice';
import userSlice from './slices/userSlice';
import variantsSlice from './slices/variantsSlice';

export interface IRootState {
  user: IUserState;
  stores: IStoresState;
  products: IProductsState;
  variants: IVariantsState;
  menu: IMenuState;
  catalog: ICatalogStructureState;
}

const rootReducer = combineReducers({
  user: userSlice,
  stores: storesSlice,
  products: productsSlice,
  variants: variantsSlice,
  menu: menuSlice,
  catalog: catalogStructureSlice,
});

export default rootReducer;
