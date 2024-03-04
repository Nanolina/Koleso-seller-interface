import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStore } from '../../../modules/stores';
import { ProductService } from '../../../services';
import { IFilterQuery } from '../../../types';
import { handleAsyncThunkError } from '../../functions';

export const handleGetAllStores = createAsyncThunk(
  'store/get-all',
  async (filter: IFilterQuery, { rejectWithValue }): Promise<IStore[]> => {
    try {
      const response = await ProductService.getAllStores(filter);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
