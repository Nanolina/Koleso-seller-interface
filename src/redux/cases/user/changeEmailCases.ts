import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IEmailPayload, IUserState } from '../../../modules/auth';
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
      (state, action: PayloadAction<IEmailPayload>) => {
        state.email = action.payload.email;
        state.loading = false;
        state.success = `The email has been changed to ${action.payload.email}`;
      }
    )
    .addCase(handleChangeEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to log in';
    });
};
