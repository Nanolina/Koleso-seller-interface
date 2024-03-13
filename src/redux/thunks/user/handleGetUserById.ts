import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserService } from '../../../services';
import { ILanguageResponse } from '../../../services/types/response';
import { handleAsyncThunkError } from '../../functions';

export const handleGetUserById = createAsyncThunk(
  'user/get-by-id',
  async (_, { rejectWithValue }): Promise<ILanguageResponse> => {
    try {
      const response = await UserService.getUserById();
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
