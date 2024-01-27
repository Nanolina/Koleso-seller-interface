import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStore } from '../../../modules/stores';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleGetAllStores = createAsyncThunk(
  'store/get-all',
  async (_, { rejectWithValue }): Promise<IStore[]> => {
    try {
      // Submit a request
      const response: any = await ProductService.getAllStores();

      // Return data to be saved in store
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
