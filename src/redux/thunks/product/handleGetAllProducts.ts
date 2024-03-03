import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct } from '../../../modules/product/productForm';
import { ProductService } from '../../../services';
import { FilterQuery } from '../../../types';
import { handleAsyncThunkError } from '../../functions';

export const handleGetAllProducts = createAsyncThunk(
  'product/get-all',
  async (filter: FilterQuery, { rejectWithValue }): Promise<IProduct[]> => {
    try {
      const response = await ProductService.getAllProducts(filter);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
