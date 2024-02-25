import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ICreateProductData,
  IProduct,
} from '../../../modules/product/productForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleCreateProduct = createAsyncThunk(
  'product/create',
  async (
    productValues: ICreateProductData,
    { rejectWithValue }
  ): Promise<IProduct> => {
    try {
      // Submit a request
      const response: any = await ProductService.createProduct(productValues);

      // Return data to be saved in product
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
