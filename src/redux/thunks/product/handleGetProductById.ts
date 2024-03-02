import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct } from '../../../modules/product/productForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleGetProductById = createAsyncThunk(
  'product/get-by-id',
  async (id: string, { rejectWithValue }): Promise<IProduct> => {
    try {
      const response = await ProductService.getProductById(id);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
