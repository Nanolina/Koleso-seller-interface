import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IProductsState } from '../../../modules/product';
import { handleCreateProduct } from '../../thunks/product';

export const createProductCases = (
  builder: ActionReducerMapBuilder<IProductsState>
) => {
  builder
    .addCase(handleCreateProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleCreateProduct.fulfilled,
      (state, action: PayloadAction<IProduct>) => {
        state.product = action.payload;
        state.success = 'The product has been successfully set up';
        state.loading = false;
      }
    )
    .addCase(handleCreateProduct.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to create new product';
    });
};
