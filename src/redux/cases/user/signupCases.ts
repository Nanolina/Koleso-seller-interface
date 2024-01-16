import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../../../modules/auth';
import { IAuthPayload } from '../../../modules/auth/types';
import { handleSignup } from '../../thunks/user';

export const signupCases = (builder: ActionReducerMapBuilder<IUserState>) => {
  builder
    .addCase(handleSignup.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(
      handleSignup.fulfilled,
      (state, action: PayloadAction<IAuthPayload>) => {
        state.id = action.payload.id;
        state.isActive = action.payload.isActive;
        state.loading = false;
      }
    )
    .addCase(handleSignup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to sign up';
    });
};
