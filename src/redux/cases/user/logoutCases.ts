import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IUserState } from '../../../modules/auth';
import { handleLogout } from '../../thunks/user';

export const logoutCases = (builder: ActionReducerMapBuilder<IUserState>) => {
  builder
    .addCase(handleLogout.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(handleLogout.fulfilled, (state) => {
      state.id = '';
      state.isActive = false;
      state.loading = false;
    })
    .addCase(handleLogout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to log out';
    });
};
