import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IStore, IStoresState } from '../../../modules/stores';
import { handleUpdateStore } from '../../thunks/store';

export const updateStoreCases = (
  builder: ActionReducerMapBuilder<IStoresState>
) => {
  builder
    .addCase(handleUpdateStore.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleUpdateStore.fulfilled,
      (state, action: PayloadAction<IStore>) => {
        state.store = action.payload;
        state.success = 'The store has been successfully updated';
        state.loading = false;
      }
    )
    .addCase(handleUpdateStore.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to update the store';
    });
};
