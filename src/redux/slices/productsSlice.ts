import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IProductsState } from '../../modules/product';
import { getAllProductsCases } from '../cases/product';
import { productsInitialState } from '../initialStates';

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IProductsState>) => {
    getAllProductsCases(builder);
  },
});

export default productsSlice.reducer;
