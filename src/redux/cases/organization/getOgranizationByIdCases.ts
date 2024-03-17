import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import {
  IOrganization,
  IOrganizationState,
} from '../../../modules/settings/organization';
import { handleGetOrganizationById } from '../../thunks/organization';

export const getOrganizationByIdCases = (
  builder: ActionReducerMapBuilder<IOrganizationState>
) => {
  builder
    .addCase(handleGetOrganizationById.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleGetOrganizationById.fulfilled,
      (state, action: PayloadAction<IOrganization>) => {
        state.organization = action.payload;
        state.loading = false;
      }
    )
    .addCase(handleGetOrganizationById.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to get organization by id';
    });
};
