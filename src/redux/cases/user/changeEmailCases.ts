import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../../../modules/auth';
import { IAuthPayload } from '../../../modules/auth/types';
import { handleChangeEmail } from '../../thunks/user';

export const changeEmailCases = (
  builder: ActionReducerMapBuilder<IUserState>
) => {
  builder
    .addCase(handleChangeEmail.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(
      handleChangeEmail.fulfilled,
      (state, action: PayloadAction<IAuthPayload>) => {
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.activationLinkId = action.payload.activationLinkId;
        state.isActive = action.payload.isActive;
        state.isVerifiedEmail = action.payload.isVerifiedEmail;
        state.isAuth = true;
        state.loading = false;
      }
    )
    .addCase(handleChangeEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to log in';
    });
};
