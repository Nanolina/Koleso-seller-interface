import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ICreateProductArg,
  IProduct,
} from '../../../modules/product/productForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleCreateProduct = createAsyncThunk<
  IProduct,
  ICreateProductArg
>(
  'product/create',
  async (
    { productValues, organizationId },
    { rejectWithValue }
  ): Promise<IProduct> => {
    try {
      const response: any = await ProductService.createProduct(
        productValues,
        organizationId
      );
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
