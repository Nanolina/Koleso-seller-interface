import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IUserState } from '../../../modules/auth';
import { handleResendEmailConfirmation } from '../../thunks/user';

export const resendEmailConfirmationCases = (
  builder: ActionReducerMapBuilder<IUserState>
) => {
  builder
    .addCase(handleResendEmailConfirmation.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(handleResendEmailConfirmation.fulfilled, (state) => {
      state.loading = false;
    })
    .addCase(handleResendEmailConfirmation.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to log out';
    });
};
