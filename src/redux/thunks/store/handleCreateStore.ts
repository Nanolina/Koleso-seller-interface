import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICreateStoreData, IStore } from '../../../modules/stores';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleCreateStore = createAsyncThunk(
  'store/create',
  async (
    storesData: ICreateStoreData,
    { rejectWithValue }
  ): Promise<IStore[]> => {
    try {
      // Submit a request
      const response: any = await ProductService.createStore(storesData);

      // Return data to be saved in store
      return response.data.stores;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
