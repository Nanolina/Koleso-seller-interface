import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../../../modules/auth';
import { IPhonePayload } from '../../../modules/settings';
import { handleChangePhone } from '../../thunks/user';

export const changePhoneCases = (
  builder: ActionReducerMapBuilder<IUserState>
) => {
  builder
    .addCase(handleChangePhone.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(
      handleChangePhone.fulfilled,
      (state, action: PayloadAction<IPhonePayload>) => {
        const phone = action.payload.phone;
        state.phone = phone;
        state.loading = false;
        state.success = `The phone has been changed to ${phone}`;
      }
    )
    .addCase(handleChangePhone.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to change phone';
    });
};
