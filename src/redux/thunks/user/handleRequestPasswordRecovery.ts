import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services';
import { IChangeEmailData } from '../../../services/types/request';

export const handleRequestPasswordRecovery = createAsyncThunk(
  'user/password/recovery',
  async (userData: IChangeEmailData, { rejectWithValue }) => {
    try {
      // Submit a request
      await AuthService.requestPasswordRecovery(userData);
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(
          error.response.data.message || error.response.data
        );
      } else {
        return rejectWithValue(`An unknown error occurred, ${error}`);
      }
    }
  }
);
