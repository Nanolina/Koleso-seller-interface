import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProductArg } from '../../../modules/product/productForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleRemoveProduct = createAsyncThunk<void, IProductArg>(
  'product/remove',
  async ({ organizationId, id }, { rejectWithValue }): Promise<void> => {
    try {
      await ProductService.removeProduct(id, organizationId);
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
