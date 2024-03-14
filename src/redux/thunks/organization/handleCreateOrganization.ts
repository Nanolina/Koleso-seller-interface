import { createAsyncThunk } from '@reduxjs/toolkit';
import { IOrganization } from '../../../modules/settings/organization';
import { UserService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleCreateOrganization = createAsyncThunk(
  'organization/create',
  async (
    organizationFormData: FormData,
    { rejectWithValue }
  ): Promise<IOrganization> => {
    try {
      const response = await UserService.createOrganization(
        organizationFormData
      );
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
