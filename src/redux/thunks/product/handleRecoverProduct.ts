import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct, IProductArg } from '../../../modules/product/productForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleRecoverProduct = createAsyncThunk<IProduct, IProductArg>(
  'product/recover',
  async ({ id, organizationId }, { rejectWithValue }): Promise<IProduct> => {
    try {
      const response = await ProductService.recoverProduct(id, organizationId);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
