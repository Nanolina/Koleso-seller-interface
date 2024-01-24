import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleLogout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      // Submit a request
      await AuthService.logout();

      // Reset access token from the local storage
      localStorage.removeItem('token');
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
