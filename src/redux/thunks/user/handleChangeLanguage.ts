import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleChangeLanguage = createAsyncThunk(
  'user/change-language',
  async (language: string, { rejectWithValue }) => {
    try {
      const response = await UserService.changeLanguage(language);
      return {
        language: response.data.language,
      };
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
