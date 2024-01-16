import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services';

export const handleLogout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      // Submit a request
      await AuthService.logout();

      // Reset access token from the local storage
      localStorage.removeItem('token');
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
