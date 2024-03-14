import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import {
  IOrganization,
  IOrganizationState,
} from '../../../modules/settings/organization';
import { handleUpdateOrganization } from '../../thunks/organization';

export const updateOrganizationCases = (
  builder: ActionReducerMapBuilder<IOrganizationState>
) => {
  builder
    .addCase(handleUpdateOrganization.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleUpdateOrganization.fulfilled,
      (state, action: PayloadAction<IOrganization>) => {
        state.organization = action.payload;
        state.success = 'The organization has been successfully updated';
        state.loading = false;
      }
    )
    .addCase(handleUpdateOrganization.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to update the organization';
    });
};
