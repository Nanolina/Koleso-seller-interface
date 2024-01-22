import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IUserState } from '../../../modules/auth';
import { userInitialState } from '../../initialStates';
import { handleLogout } from '../../thunks/user';

export const logoutCases = (builder: ActionReducerMapBuilder<IUserState>) => {
  builder
    .addCase(handleLogout.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(handleLogout.fulfilled, (state) => {
      Object.assign(state, userInitialState);
    })
    .addCase(handleLogout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to log out';
    });
};
