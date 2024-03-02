import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStore } from '../../../modules/stores';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleRecoverStore = createAsyncThunk(
  'store/recover',
  async (id: string, { rejectWithValue }): Promise<IStore> => {
    try {
      const response = await ProductService.recoverStore(id);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
