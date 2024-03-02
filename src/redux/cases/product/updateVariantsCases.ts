import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IProductsState } from '../../../modules/product/productForm';
import { IVariant } from '../../../modules/product/variantForm';
import { handleUpdateVariants } from '../../thunks/product';

export const updateVariantsCases = (
  builder: ActionReducerMapBuilder<IProductsState>
) => {
  builder
    .addCase(handleUpdateVariants.pending, (state) => {
      state.product.variants.loading = true;
      state.product.variants.error = null;
      state.product.variants.success = null;
    })
    .addCase(
      handleUpdateVariants.fulfilled,
      (state, action: PayloadAction<IVariant[]>) => {
        state.product.variants.items = action.payload;
        state.product.variants.success =
          'Variants for the product has been successfully set up';
        state.product.variants.loading = false;
      }
    )
    .addCase(handleUpdateVariants.rejected, (state, action) => {
      state.product.variants.loading = false;
      state.product.variants.success = null;
      state.product.variants.error =
        action.payload || 'Failed to create variants';
    });
};
