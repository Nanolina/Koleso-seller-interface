import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IAuthPayload, IUserState } from '../../../modules/auth';
import { handleCheckAuth } from '../../thunks/user';

export const checkAuthCases = (
  builder: ActionReducerMapBuilder<IUserState>
) => {
  builder
    .addCase(handleCheckAuth.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(
      handleCheckAuth.fulfilled,
      (state, action: PayloadAction<IAuthPayload>) => {
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.phone = action.payload.phone;
        state.activationLinkId = action.payload.activationLinkId;
        state.isActive = action.payload.isActive;
        state.isVerifiedEmail = action.payload.isVerifiedEmail;
        state.isAuth = true;
        state.loading = false;
      }
    )
    .addCase(handleCheckAuth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to refresh';
    });
};
