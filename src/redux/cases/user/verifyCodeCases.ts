import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { ROLE } from '../../../consts';
import { IAuthPayload, IUserState } from '../../../modules/auth';
import { handleVerifyCode } from '../../thunks/user';

export const verifyCodeCases = (
  builder: ActionReducerMapBuilder<IUserState>
) => {
  builder
    .addCase(handleVerifyCode.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(
      handleVerifyCode.fulfilled,
      (state, action: PayloadAction<IAuthPayload>) => {
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.phone = action.payload.phone;
        state.isActive = action.payload.isActive;
        state.isVerifiedEmail = action.payload.isVerifiedEmail;
        state.isSeller = action.payload.role === ROLE;
        state.loading = false;
      }
    )
    .addCase(handleVerifyCode.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to verify code';
    });
};
