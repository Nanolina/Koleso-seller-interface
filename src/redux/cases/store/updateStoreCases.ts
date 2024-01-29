import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IStoresState } from '../../../modules/stores';
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
    .addCase(handleUpdateStore.fulfilled, (state) => {
      state.success = 'The store has been successfully updated';
      state.loading = false;
    })
    .addCase(handleUpdateStore.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to update the store';
    });
};
