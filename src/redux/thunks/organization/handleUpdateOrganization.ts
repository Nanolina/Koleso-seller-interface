import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  IOrganization,
  IUpdateOrganizationArg,
} from '../../../modules/settings/organization';
import { UserService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleUpdateOrganization = createAsyncThunk<
  IOrganization,
  IUpdateOrganizationArg
>(
  'organization/update',
  async (
    { id, organizationFormData },
    { rejectWithValue }
  ): Promise<IOrganization> => {
    try {
      const response = await UserService.updateOrganization(
        id,
        organizationFormData
      );
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
