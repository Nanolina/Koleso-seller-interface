import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AuthResponse } from '../../../services/types/response';
import { handleAsyncThunkError } from '../../functions';

const API_URL = process.env.REACT_APP_AUTH_SERVICE_URL;

export const handleCheckAuth = createAsyncThunk(
  'user/auth/check',
  async (_, { rejectWithValue }) => {
    try {
      // Submit a request
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });

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
