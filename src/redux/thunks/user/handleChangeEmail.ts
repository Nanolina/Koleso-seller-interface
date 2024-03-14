import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleChangeEmail = createAsyncThunk(
  'user/change-email',
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await AuthService.changeEmail(email);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
