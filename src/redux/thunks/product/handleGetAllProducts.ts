import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  IGetAllProductsArg,
  IProduct,
} from '../../../modules/product/productForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleGetAllProducts = createAsyncThunk<
  IProduct[],
  IGetAllProductsArg
>(
  'product/get-all',
  async (
    { filter, organizationId },
    { rejectWithValue }
  ): Promise<IProduct[]> => {
    try {
      const response = await ProductService.getAllProducts(
        filter,
        organizationId
      );
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
