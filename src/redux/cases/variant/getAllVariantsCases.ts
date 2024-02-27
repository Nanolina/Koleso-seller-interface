import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IVariant, IVariantsState } from '../../../modules/product/variantForm';
import { handleGetAllVariants } from '../../thunks/variants';

export const getAllVariantsCases = (
  builder: ActionReducerMapBuilder<IVariantsState>
) => {
  builder
    .addCase(handleGetAllVariants.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleGetAllVariants.fulfilled,
      (state, action: PayloadAction<IVariant[]>) => {
        state.variants = action.payload;
        state.loading = false;
      }
    )
    .addCase(handleGetAllVariants.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to get all variants by productId';
    });
};
