import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services';
import { IChangeEmailData } from '../../../services/types/request';

export const handleChangeEmail = createAsyncThunk(
  'user/change-email',
  async (userData: IChangeEmailData, { rejectWithValue }) => {
    try {
      // Submit a request
      const response = await AuthService.changeEmail(userData);

      // Return data to be saved in store
      return {
        email: response.data.email,
      };
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
