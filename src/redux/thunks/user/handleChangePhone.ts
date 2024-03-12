import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleChangePhone = createAsyncThunk(
  'user/change-phone',
  async (phone: string, { rejectWithValue }) => {
    try {
      const response = await AuthService.changePhone(phone);
      return {
        phone: response.data.phone,
      };
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
