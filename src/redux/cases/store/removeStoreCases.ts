import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IStoresState } from '../../../modules/stores';
import { handleRemoveStore } from '../../thunks/store';

export const removeStoreCases = (
  builder: ActionReducerMapBuilder<IStoresState>
) => {
  builder
    .addCase(handleRemoveStore.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(handleRemoveStore.fulfilled, (state) => {
      state.success = 'The store has been successfully deleted';
      state.loading = false;
    })
    .addCase(handleRemoveStore.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to remove the store';
    });
};
