import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AuthResponse } from '../../../services/types/response';

const API_URL = process.env.REACT_APP_AUTH_SERVICE_URL;

export const handleCheckAuth = createAsyncThunk(
  'user/check-auth',
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
