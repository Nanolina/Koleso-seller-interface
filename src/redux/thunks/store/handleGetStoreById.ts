import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStore } from '../../../modules/stores';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleGetStoreById = createAsyncThunk(
  'store/get-by-id',
  async (id: string, { rejectWithValue }): Promise<IStore> => {
    try {
      const response = await ProductService.getStoreById(id);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
