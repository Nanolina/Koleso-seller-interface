import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStore } from '../../../modules/stores';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleCreateStore = createAsyncThunk(
  'store/create',
  async (storeFormData: FormData, { rejectWithValue }): Promise<IStore> => {
    try {
      // Submit a request
      const response: any = await ProductService.createStore(storeFormData);

      // Return data to be saved in store
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
