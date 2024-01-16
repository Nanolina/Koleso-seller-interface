import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../services';
import { ILoginData, ISignUpData } from '../../services/types/request';

// Login
export const handleLogin = createAsyncThunk(
  'user/login',
  async (userData: ILoginData, { rejectWithValue }) => {
    try {
      // Submit a request
      const response = await AuthService.login(userData);

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

// Sign up
export const handleSignUp = createAsyncThunk(
  'user/signUp',
  async (userData: ISignUpData, { dispatch, rejectWithValue }) => {
    try {
      // Submit a request
      const response: any = await AuthService.signUp(userData);

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
