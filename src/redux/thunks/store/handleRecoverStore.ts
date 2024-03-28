import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGetStoreByIdArg, IStore } from '../../../modules/stores';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleRecoverStore = createAsyncThunk<IStore, IGetStoreByIdArg>(
  'store/recover',
  async ({ id, organizationId }, { rejectWithValue }): Promise<IStore> => {
    try {
      const response = await ProductService.recoverStore(id, organizationId);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
