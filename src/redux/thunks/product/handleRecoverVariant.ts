import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProductArg } from '../../../modules/product/productForm';
import { IVariant } from '../../../modules/product/variantForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleRecoverVariant = createAsyncThunk<IVariant[], IProductArg>(
  'variant/recover',
  async ({ organizationId, id }, { rejectWithValue }): Promise<IVariant[]> => {
    try {
      const response = await ProductService.recoverVariant(id, organizationId);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
