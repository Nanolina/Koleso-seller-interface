import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGetAllStoresArg, IStore } from '../../../modules/stores';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleGetAllStores = createAsyncThunk<IStore[], IGetAllStoresArg>(
  'store/get-all',
  async (
    { filter, organizationId },
    { rejectWithValue }
  ): Promise<IStore[]> => {
    try {
      const response = await ProductService.getAllStores(
        filter,
        organizationId
      );
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
