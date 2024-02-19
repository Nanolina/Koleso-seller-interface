import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IGroupedProducts, IProductsState } from '../../../modules/product';
import { handleGetGroupedProducts } from '../../thunks/product';

export const getGroupedProductsCases = (
  builder: ActionReducerMapBuilder<IProductsState>
) => {
  builder
    .addCase(handleGetGroupedProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(
      handleGetGroupedProducts.fulfilled,
      (state, action: PayloadAction<IGroupedProducts[]>) => {
        state.groupedProducts = action.payload;
        state.loading = false;
      }
    )
    .addCase(handleGetGroupedProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to get grouped products';
    });
};
