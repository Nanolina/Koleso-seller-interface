import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IAuthPayload, IUserState } from '../../../modules/auth';
import { handleSetNewPassword } from '../../thunks/user';

export const setNewPasswordCases = (
  builder: ActionReducerMapBuilder<IUserState>
) => {
  builder
    .addCase(handleSetNewPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(
      handleSetNewPassword.fulfilled,
      (state, action: PayloadAction<IAuthPayload>) => {
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.activationLinkId = action.payload.activationLinkId;
        state.isActive = action.payload.isActive;
        state.isVerifiedEmail = action.payload.isVerifiedEmail;
        state.isAuth = true;
        state.loading = false;
        state.success = 'The new password was successfully saved';
      }
    )
    .addCase(handleSetNewPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to set new password';
    });
};
