import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IVariant, IVariantsState } from '../../../modules/product/variantForm';
import { handleUpdateVariants } from '../../thunks/variants';

export const createVariantsCases = (
  builder: ActionReducerMapBuilder<IVariantsState>
) => {
  builder
    .addCase(handleUpdateVariants.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleUpdateVariants.fulfilled,
      (state, action: PayloadAction<IVariant[]>) => {
        state.variants = action.payload;
        state.success = 'Variants for the product has been successfully set up';
        state.loading = false;
      }
    )
    .addCase(handleUpdateVariants.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to create variants';
    });
};
