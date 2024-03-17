import { createAsyncThunk } from '@reduxjs/toolkit';
import { IOrganization } from '../../../modules/settings/organization';
import { UserService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleGetOrganizationById = createAsyncThunk(
  'organization/get-by-id',
  async (id: string, { rejectWithValue }): Promise<IOrganization> => {
    try {
      const response = await UserService.getOrganizationById(id);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
