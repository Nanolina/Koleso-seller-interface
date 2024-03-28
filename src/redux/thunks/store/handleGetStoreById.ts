import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGetStoreByIdArg, IStore } from '../../../modules/stores';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleGetStoreById = createAsyncThunk<IStore, IGetStoreByIdArg>(
  'store/get-by-id',
  async ({ id, organizationId }, { rejectWithValue }): Promise<IStore> => {
    try {
      const response = await ProductService.getStoreById(id, organizationId);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
