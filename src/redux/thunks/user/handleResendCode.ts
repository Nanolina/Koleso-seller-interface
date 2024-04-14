import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services';
import { IResendCodeData } from '../../../services/types/request';
import { handleAsyncThunkError } from '../../functions';

export const handleResendCode = createAsyncThunk(
  'user/code/resend',
  async (codeData: IResendCodeData, { rejectWithValue }) => {
    try {
      const response = await AuthService.resendCode(codeData);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
