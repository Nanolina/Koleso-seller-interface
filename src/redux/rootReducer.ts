import { combineReducers } from 'redux';
import { IUserState } from '../modules/auth';
import { IMenuState } from '../modules/menu';
import { IColorsWithImagesState } from '../modules/product/imageForm';
import {
  ICatalogStructureState,
  IProductsState,
} from '../modules/product/productForm';
import { IOrganizationState } from '../modules/settings/organization';
import { IStoresState } from '../modules/stores';
import catalogStructureSlice from './slices/catalogStructureSlice';
import colorsWithImagesSlice from './slices/colorsWithImagesSlice';
import menuSlice from './slices/menuSlice';
import organizationSlice from './slices/organizationSlice';
import productsSlice from './slices/productsSlice';
import storesSlice from './slices/storesSlice';
import userSlice from './slices/userSlice';

export interface IRootState {
  user: IUserState;
  organization: IOrganizationState;
  stores: IStoresState;
  products: IProductsState;
  colorsWithImages: IColorsWithImagesState;
  menu: IMenuState;
  catalog: ICatalogStructureState;
}

const rootReducer = combineReducers({
  user: userSlice,
  organization: organizationSlice,
  stores: storesSlice,
  products: productsSlice,
  colorsWithImages: colorsWithImagesSlice,
  menu: menuSlice,
  catalog: catalogStructureSlice,
});

export default rootReducer;
