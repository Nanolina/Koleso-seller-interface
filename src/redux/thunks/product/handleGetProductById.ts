import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct } from '../../../modules/product';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleGetProductById = createAsyncThunk(
  'product/get-by-id',
  async (id: string, { rejectWithValue }): Promise<IProduct> => {
    try {
      // Submit a request
      const response = await ProductService.getProductById(id);

      // Return data to be saved in store
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
