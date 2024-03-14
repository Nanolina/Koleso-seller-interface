import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../../../modules/auth';
import { IUserPayload } from '../../../modules/settings';
import { handleGetUserById } from '../../thunks/user';

export const getUserByIdCases = (
  builder: ActionReducerMapBuilder<IUserState>
) => {
  builder
    .addCase(handleGetUserById.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(
      handleGetUserById.fulfilled,
      (state, action: PayloadAction<IUserPayload>) => {
        state.language = action.payload.language;
        state.organizationId = action.payload.organizationId;
        state.loading = false;
      }
    )
    .addCase(handleGetUserById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to get user';
    });
};
