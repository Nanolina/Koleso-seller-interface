import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IProductsState } from '../../../modules/product/productForm';
import { handleUpdateProduct } from '../../thunks/product';

export const updateProductCases = (
  builder: ActionReducerMapBuilder<IProductsState>
) => {
  builder
    .addCase(handleUpdateProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleUpdateProduct.fulfilled,
      (state, action: PayloadAction<IProduct>) => {
        state.product = action.payload;
        state.success = 'The product has been successfully updated';
        state.loading = false;
      }
    )
    .addCase(handleUpdateProduct.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to update the product';
    });
};
