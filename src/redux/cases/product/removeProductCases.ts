import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IProductsState } from '../../../modules/product/productForm';
import { productInitialState } from '../../initialStates';
import { handleRemoveProduct } from '../../thunks/product';

export const removeProductCases = (
  builder: ActionReducerMapBuilder<IProductsState>
) => {
  builder
    .addCase(handleRemoveProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(handleRemoveProduct.fulfilled, (state) => {
      state.product = Object.assign(state.product, productInitialState);
      state.success = 'The product has been successfully deleted';
      state.loading = false;
    })
    .addCase(handleRemoveProduct.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to remove product';
    });
};
