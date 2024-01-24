import { createAsyncThunk } from '@reduxjs/toolkit';
import { NotificationService } from '../../../services';
import { IResendEmailConfirmationData } from '../../../services/types/request';
import { handleAsyncThunkError } from '../../functions';

export const handleResendEmailConfirmation = createAsyncThunk(
  'user/email/resend-confirmation',
  async (userData: IResendEmailConfirmationData, { rejectWithValue }) => {
    try {
      // Submit a request
      await NotificationService.resendEmailConfirmation(userData);
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
