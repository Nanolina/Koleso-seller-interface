import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStore } from '../../../modules/stores';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleGetAllStores = createAsyncThunk(
  'store/get-all',
  async (_, { rejectWithValue }): Promise<IStore[]> => {
    try {
      const response = await ProductService.getAllStores();
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
