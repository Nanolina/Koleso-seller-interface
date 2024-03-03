import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct } from '../../../modules/product/productForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleRecoverProduct = createAsyncThunk(
  'product/recover',
  async (id: string, { rejectWithValue }): Promise<IProduct> => {
    try {
      const response = await ProductService.recoverProduct(id);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
