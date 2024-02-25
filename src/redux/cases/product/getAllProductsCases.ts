import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IProductsState } from '../../../modules/product/productForm';
import { handleGetAllProducts } from '../../thunks/product';

export const getAllProductsCases = (
  builder: ActionReducerMapBuilder<IProductsState>
) => {
  builder
    .addCase(handleGetAllProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleGetAllProducts.fulfilled,
      (state, action: PayloadAction<IProduct[]>) => {
        state.items = action.payload;
        state.loading = false;
      }
    )
    .addCase(handleGetAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to get all products';
    });
};
