import { createAsyncThunk } from '@reduxjs/toolkit';
import { IVariant } from '../../../modules/product/variantForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleRecoverVariant = createAsyncThunk(
  'variant/recover',
  async (id: string, { rejectWithValue }): Promise<IVariant[]> => {
    try {
      const response = await ProductService.recoverVariant(id);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
