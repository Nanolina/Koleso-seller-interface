import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import {
  IOrganization,
  IOrganizationState,
} from '../../../modules/settings/organization';
import { handleCreateOrganization } from '../../thunks/organization';

export const createOrganizationCases = (
  builder: ActionReducerMapBuilder<IOrganizationState>
) => {
  builder
    .addCase(handleCreateOrganization.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleCreateOrganization.fulfilled,
      (state, action: PayloadAction<IOrganization>) => {
        state.organization = action.payload;
        state.success = 'The organization has been successfully created';
        state.loading = false;
      }
    )
    .addCase(handleCreateOrganization.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to create the organization';
    });
};
