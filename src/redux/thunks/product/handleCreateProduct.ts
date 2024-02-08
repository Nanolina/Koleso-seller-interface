import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct } from '../../../modules/product';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleCreateProduct = createAsyncThunk(
  'product/create',
  async (productFormData: any, { rejectWithValue }): Promise<IProduct> => {
    try {
      // Submit a request
      const response: any = await ProductService.createProduct(productFormData);

      // Return data to be saved in product
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
