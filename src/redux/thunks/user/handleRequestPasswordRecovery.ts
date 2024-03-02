import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services';
import { IChangeEmailData } from '../../../services/types/request';
import { handleAsyncThunkError } from '../../functions';

export const handleRequestPasswordRecovery = createAsyncThunk(
  'user/password/recovery',
  async (userData: IChangeEmailData, { rejectWithValue }) => {
    try {
      await AuthService.requestPasswordRecovery(userData);
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
