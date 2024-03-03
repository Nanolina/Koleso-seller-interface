import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IProductsState } from '../../modules/product/productForm';
import {
  createProductCases,
  getAllProductsCases,
  getProductByIdCases,
  recoverProductCases,
  removeProductCases,
  updateProductCases,
  updateVariantsCases,
} from '../cases/product';
import { productsInitialState } from '../initialStates';

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  reducers: {
    toggleShowDeleted(state) {
      state.showDeleted = !state.showDeleted;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IProductsState>) => {
    createProductCases(builder);
    getAllProductsCases(builder);
    getProductByIdCases(builder);
    updateProductCases(builder);
    updateVariantsCases(builder);
    removeProductCases(builder);
    recoverProductCases(builder);
  },
});

export const { toggleShowDeleted } = productsSlice.actions;

export default productsSlice.reducer;
