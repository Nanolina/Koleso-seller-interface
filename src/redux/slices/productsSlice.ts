import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IProductsState } from '../../modules/product';
import {
  createProductCases,
  getAllProductsCases,
  getGroupedProductsCases,
  getProductByIdCases,
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
    getGroupedProductsCases(builder);
  },
});

export default productsSlice.reducer;
