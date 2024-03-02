import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleRemoveProduct = createAsyncThunk(
  'product/remove',
  async (id: string, { rejectWithValue }): Promise<void> => {
    try {
      await ProductService.removeProduct(id);
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
