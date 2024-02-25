import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';
import { IProduct } from '../../../modules/product/productForm';

export const handleGetAllProducts = createAsyncThunk(
  'product/get-all',
  async (_, { rejectWithValue }): Promise<IProduct[]> => {
    try {
      // Submit a request
      const response = await ProductService.getAllProducts();

      // Return data to be saved in product
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
