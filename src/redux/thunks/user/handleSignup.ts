import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services';
import { ISignupData } from '../../../services/types/request';

export const handleSignup = createAsyncThunk(
  'user/signup',
  async (userData: ISignupData, { rejectWithValue }) => {
    try {
      // Submit a request
      const response: any = await AuthService.signup(userData);

      // Get data from response
      const { token, user } = response.data;

      // Set access token to the local storage
      localStorage.setItem('token', token);

      // Return data to be saved in store
      return { id: user.id, isActive: user.isActive };
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
