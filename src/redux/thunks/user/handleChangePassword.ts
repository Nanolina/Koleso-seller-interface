import { createAsyncThunk } from '@reduxjs/toolkit';
import { IChangePasswordData } from '../../../modules/settings';
import { AuthService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleChangePassword = createAsyncThunk(
  'user/password/change',
  async (passwordValues: IChangePasswordData, { rejectWithValue }) => {
    try {
      await AuthService.changePassword(passwordValues);
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
