import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct } from '../../../modules/product';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleGetAllProducts = createAsyncThunk(
  'product/get-all',
  async (_, { rejectWithValue }): Promise<IProduct[]> => {
    try {
      // Submit a request
      const response = await ProductService.getAllProducts();

      // Return data to be saved in store
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
