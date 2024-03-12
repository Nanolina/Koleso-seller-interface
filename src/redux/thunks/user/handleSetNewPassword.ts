import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services';
import { ISetNewPasswordDataForService } from '../../../services/types/request';
import { handleAsyncThunkError } from '../../functions';

export const handleSetNewPassword = createAsyncThunk(
  'user/password/set',
  async (userData: ISetNewPasswordDataForService, { rejectWithValue }) => {
    try {
      // Submit a request
      const response: any = await AuthService.setNewPassword(userData);

      // Get data from response
      const { token, user } = response.data;

      // Set access token to the local storage
      localStorage.setItem('token', token);

      // Return data to be saved in store
      return {
        isActive: user.isActive,
      };
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
