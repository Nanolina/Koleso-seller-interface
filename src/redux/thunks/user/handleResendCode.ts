import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services';
import { CodeType } from '../../../types';
import { handleAsyncThunkError } from '../../functions';

export const handleResendCode = createAsyncThunk(
  'user/code/resend',
  async (codeType: CodeType, { rejectWithValue }) => {
    try {
      const response = await AuthService.resendCode(codeType);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
