import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IProductsState } from '../../../modules/product';
import { handleGetProductById } from '../../thunks/product';

export const getProductByIdCases = (
  builder: ActionReducerMapBuilder<IProductsState>
) => {
  builder
    .addCase(handleGetProductById.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleGetProductById.fulfilled,
      (state, action: PayloadAction<IProduct>) => {
        state.product = action.payload;
        state.loading = false;
      }
    )
    .addCase(handleGetProductById.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to get product by id';
    });
};
