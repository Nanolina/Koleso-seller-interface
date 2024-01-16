import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../../../modules/auth';
import { IAuthPayload } from '../../../modules/auth/types';
import { handleLogin } from '../../thunks/user';

export const loginCases = (builder: ActionReducerMapBuilder<IUserState>) => {
  builder
    .addCase(handleLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(
      handleLogin.fulfilled,
      (state, action: PayloadAction<IAuthPayload>) => {
        state.id = action.payload.id;
        state.isActive = action.payload.isActive;
        state.loading = false;
      }
    )
    .addCase(handleLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to log in';
    });
};
