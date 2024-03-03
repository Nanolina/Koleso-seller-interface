import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStore } from '../../../modules/stores';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleRemoveStore = createAsyncThunk(
  'store/remove',
  async (storeId: string, { rejectWithValue }): Promise<IStore> => {
    try {
      const response = await ProductService.removeStore(storeId);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
