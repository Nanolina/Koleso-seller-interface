import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IUserState } from '../../../modules/auth';
import { handleRequestPasswordRecovery } from '../../thunks/user';

export const requestPasswordRecoveryCases = (
  builder: ActionReducerMapBuilder<IUserState>
) => {
  builder
    .addCase(handleRequestPasswordRecovery.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(handleRequestPasswordRecovery.fulfilled, (state) => {
      state.loading = false;
      state.success = 'A password reset link has been emailed to you';
    })
    .addCase(handleRequestPasswordRecovery.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to send password reset link';
    });
};
