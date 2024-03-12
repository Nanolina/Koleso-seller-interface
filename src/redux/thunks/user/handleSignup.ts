import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services';
import { ISignupData } from '../../../services/types/request';
import { handleAsyncThunkError } from '../../functions';

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
      return user;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
