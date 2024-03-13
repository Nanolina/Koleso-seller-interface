import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IUserState } from '../../../modules/auth';
import { handleChangePassword } from '../../thunks/user';

export const changePasswordCases = (
  builder: ActionReducerMapBuilder<IUserState>
) => {
  builder
    .addCase(handleChangePassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(handleChangePassword.fulfilled, (state) => {
      state.loading = false;
      state.success = `The password was successfully changed`;
    })
    .addCase(handleChangePassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to change password';
    });
};
