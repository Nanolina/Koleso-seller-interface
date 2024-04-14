import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IUserState, IVerifyCodePayload } from '../../../modules/auth';
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
      (state, action: PayloadAction<IVerifyCodePayload>) => {
        state.isVerifiedEmail = action.payload.isVerifiedEmail;
        state.loading = false;
      }
    )
    .addCase(handleVerifyCode.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to verify code';
    });
};
