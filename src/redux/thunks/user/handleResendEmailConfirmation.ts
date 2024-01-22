import { createAsyncThunk } from '@reduxjs/toolkit';
import { NotificationService } from '../../../services';
import { IResendEmailConfirmationData } from '../../../services/types/request';

export const handleResendEmailConfirmation = createAsyncThunk(
  'user/email/resend-confirmation',
  async (userData: IResendEmailConfirmationData, { rejectWithValue }) => {
    try {
      // Submit a request
      await NotificationService.resendEmailConfirmation(userData);
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
