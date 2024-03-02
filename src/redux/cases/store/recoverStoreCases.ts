import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IStore, IStoresState } from '../../../modules/stores';
import { handleRecoverStore } from '../../thunks/store';

export const recoverStoreCases = (
  builder: ActionReducerMapBuilder<IStoresState>
) => {
  builder
    .addCase(handleRecoverStore.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleRecoverStore.fulfilled,
      (state, action: PayloadAction<IStore>) => {
        state.store = action.payload;
        state.loading = false;
      }
    )
    .addCase(handleRecoverStore.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to recover store by id';
    });
};
