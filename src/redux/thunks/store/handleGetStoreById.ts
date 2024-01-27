import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStore } from '../../../modules/stores';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleGetStoreById = createAsyncThunk(
  'store/get-by-id',
  async (id: string, { rejectWithValue }): Promise<IStore> => {
    try {
      // Submit a request
      const response = await ProductService.getStoreById(id);

      // Return data to be saved in store
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
