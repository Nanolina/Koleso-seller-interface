import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';
import { IProduct } from '../../../modules/product/productForm';

export const handleGetProductById = createAsyncThunk(
  'product/get-by-id',
  async (id: string, { rejectWithValue }): Promise<IProduct> => {
    try {
      // Submit a request
      const response = await ProductService.getProductById(id);

      // Return data to be saved in product
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
