import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services';
import { IVerifyCodeData } from '../../../services/types/request';
import { handleAsyncThunkError } from '../../functions';

export const handleVerifyCode = createAsyncThunk(
  'user/code/verify',
  async (codeData: IVerifyCodeData, { rejectWithValue }) => {
    try {
      const response = await AuthService.verifyCode(codeData);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
