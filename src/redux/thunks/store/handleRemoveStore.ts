import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGetStoreByIdArg, IStore } from '../../../modules/stores';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleRemoveStore = createAsyncThunk<IStore, IGetStoreByIdArg>(
  'store/remove',
  async ({ id, organizationId }, { rejectWithValue }): Promise<IStore> => {
    try {
      const response = await ProductService.removeStore(id, organizationId);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
