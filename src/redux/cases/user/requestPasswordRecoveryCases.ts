import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IEmailPayload, IUserState } from '../../../modules/auth';
import { handleRequestPasswordRecovery } from '../../thunks/user';

export const requestPasswordRecoveryCases = (
  builder: ActionReducerMapBuilder<IUserState>
) => {
  builder
    .addCase(handleRequestPasswordRecovery.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(
      handleRequestPasswordRecovery.fulfilled,
      (state, action: PayloadAction<IEmailPayload>) => {
        state.email = action.payload.email;
        state.loading = false;
        state.success = 'The code to reset password was sent to email';
      }
    )
    .addCase(handleRequestPasswordRecovery.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to send the code';
    });
};
