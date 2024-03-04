import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  IGetProductByIdArg,
  IProduct,
} from '../../../modules/product/productForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleGetProductById = createAsyncThunk<
  IProduct,
  IGetProductByIdArg
>(
  'product/get-by-id',
  async ({ id, filterVariants }, { rejectWithValue }): Promise<IProduct> => {
    try {
      const response = await ProductService.getProductById(id, filterVariants);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
