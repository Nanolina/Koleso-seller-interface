import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStore } from '../../../modules/stores';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleUpdateStore = createAsyncThunk(
  'store/update',
  async (storesData: IStore, { rejectWithValue }): Promise<IStore> => {
    try {
      // Submit a request
      const response = await ProductService.updateStore(storesData);

      // Return data to be saved in store
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
