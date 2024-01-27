import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IStore, IStoresState } from '../../../modules/stores';
import { handleGetAllStores } from '../../thunks/store';

export const getAllStoresCases = (
  builder: ActionReducerMapBuilder<IStoresState>
) => {
  builder
    .addCase(handleGetAllStores.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleGetAllStores.fulfilled,
      (state, action: PayloadAction<IStore[]>) => {
        state.items = action.payload;
        state.loading = false;
      }
    )
    .addCase(handleGetAllStores.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to get all stores';
    });
};
