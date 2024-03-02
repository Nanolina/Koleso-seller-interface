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
      const response: any = await ProductService.createProduct(productValues);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
