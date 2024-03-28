import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStore, IUpdateStoreArg } from '../../../modules/stores';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleUpdateStore = createAsyncThunk<IStore, IUpdateStoreArg>(
  'store/update',
  async (
    { id, storeFormData, organizationId },
    { rejectWithValue }
  ): Promise<IStore> => {
    try {
      const response = await ProductService.updateStore(
        id,
        storeFormData,
        organizationId
      );
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
