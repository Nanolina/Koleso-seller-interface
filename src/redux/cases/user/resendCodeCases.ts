import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IUserState } from '../../../modules/auth';
import { handleResendCode } from '../../thunks/user';

export const resendCodeCases = (
  builder: ActionReducerMapBuilder<IUserState>
) => {
  builder
    .addCase(handleResendCode.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(handleResendCode.fulfilled, (state) => {
      state.loading = false;
      state.success = 'The code was sent to your email';
    })
    .addCase(handleResendCode.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to resend the code';
    });
};
