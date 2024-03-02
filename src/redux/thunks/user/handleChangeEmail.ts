import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services';
import { IChangeEmailData } from '../../../services/types/request';
import { handleAsyncThunkError } from '../../functions';

export const handleChangeEmail = createAsyncThunk(
  'user/change-email',
  async (userData: IChangeEmailData, { rejectWithValue }) => {
    try {
      const response = await AuthService.changeEmail(userData);
      return {
        email: response.data.email,
      };
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
