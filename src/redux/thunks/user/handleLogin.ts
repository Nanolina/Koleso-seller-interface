import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services';
import { ILoginData } from '../../../services/types/request';
import { handleAsyncThunkError } from '../../functions';

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
      return {
        id: user.id,
        email: user.email,
        activationLinkId: user.activationLinkId,
        isActive: user.isActive,
        isVerifiedEmail: user.isVerifiedEmail,
      };
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
