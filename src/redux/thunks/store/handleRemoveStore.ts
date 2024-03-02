import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleRemoveStore = createAsyncThunk(
  'store/remove',
  async (storeId: string, { rejectWithValue }): Promise<void> => {
    try {
      await ProductService.removeStore(storeId);
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
