import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStore } from '../../../modules/stores';
import { ProductService } from '../../../services';
import { FilterQuery } from '../../../types';
import { handleAsyncThunkError } from '../../functions';

export const handleGetAllStores = createAsyncThunk(
  'store/get-all',
  async (filter: FilterQuery, { rejectWithValue }): Promise<IStore[]> => {
    try {
      const response = await ProductService.getAllStores(filter);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
