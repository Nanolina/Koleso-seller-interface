import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct } from '../../../modules/product/productForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleGetAllProducts = createAsyncThunk(
  'product/get-all',
  async (_, { rejectWithValue }): Promise<IProduct[]> => {
    try {
      const response = await ProductService.getAllProducts();
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
