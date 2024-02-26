import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IVariantsState } from '../../../modules/product/variantForm';
import { handleCreateVariants } from '../../thunks/variants';

export const createVariantsCases = (
  builder: ActionReducerMapBuilder<IVariantsState>
) => {
  builder
    .addCase(handleCreateVariants.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(handleCreateVariants.fulfilled, (state) => {
      state.success = 'Variants for the product has been successfully set up';
      state.loading = false;
    })
    .addCase(handleCreateVariants.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to create variants';
    });
};
