import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICreateStoresArg, IStore } from '../../../modules/stores';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleCreateStore = createAsyncThunk<IStore, ICreateStoresArg>(
  'store/create',
  async (
    { organizationId, storeFormData },
    { rejectWithValue }
  ): Promise<IStore> => {
    try {
      const response: any = await ProductService.createStore(
        storeFormData,
        organizationId
      );
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
