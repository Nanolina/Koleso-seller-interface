import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStore, IUpdateStoreArg } from '../../../modules/stores';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleUpdateStore = createAsyncThunk<IStore, IUpdateStoreArg>(
  'store/update',
  async ({ id, storeFormData }, { rejectWithValue }): Promise<IStore> => {
    try {
      // Submit a request
      const response = await ProductService.updateStore(id, storeFormData);

      // Return data to be saved in store
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
