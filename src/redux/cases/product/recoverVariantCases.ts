import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IProductsState } from '../../../modules/product/productForm';
import { IVariant } from '../../../modules/product/variantForm';
import { handleRecoverVariant } from '../../thunks/product';

export const recoverVariantCases = (
  builder: ActionReducerMapBuilder<IProductsState>
) => {
  builder
    .addCase(handleRecoverVariant.pending, (state) => {
      state.product.variants.loading = true;
      state.product.variants.error = null;
      state.product.variants.success = null;
    })
    .addCase(
      handleRecoverVariant.fulfilled,
      (state, action: PayloadAction<IVariant[]>) => {
        state.product.variants.items = action.payload;
        state.product.variants.loading = false;
        state.product.variants.error = null;
        state.product.variants.success = null;
      }
    )
    .addCase(handleRecoverVariant.rejected, (state, action) => {
      state.product.variants.loading = false;
      state.product.variants.success = null;
      state.product.variants.error =
        action.payload || 'Failed to recover variant by id';
    });
};
