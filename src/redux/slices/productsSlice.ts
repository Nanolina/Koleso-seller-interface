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
  reducers: {},
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

export default productsSlice.reducer;
