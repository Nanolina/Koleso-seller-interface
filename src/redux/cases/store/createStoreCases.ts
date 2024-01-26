import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IStore, IStoresState } from '../../../modules/stores';
import { handleCreateStore } from '../../thunks/store';

export const createStoreCases = (
  builder: ActionReducerMapBuilder<IStoresState>
) => {
  builder
    .addCase(handleCreateStore.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleCreateStore.fulfilled,
      (state, action: PayloadAction<IStore[]>) => {
        state.stores = action.payload;
        state.success = 'The store has been successfully set up';
        state.loading = false;
      }
    )
    .addCase(handleCreateStore.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to create new store';
    });
};
