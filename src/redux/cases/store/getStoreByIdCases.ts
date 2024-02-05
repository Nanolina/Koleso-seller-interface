import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IStore, IStoresState } from '../../../modules/stores';
import { handleGetStoreById } from '../../thunks/store';

export const getStoreByIdCases = (
  builder: ActionReducerMapBuilder<IStoresState>
) => {
  builder
    .addCase(handleGetStoreById.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleGetStoreById.fulfilled,
      (state, action: PayloadAction<IStore>) => {
        state.store = action.payload;
        state.loading = false;
      }
    )
    .addCase(handleGetStoreById.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to get store by id';
    });
};
