import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct } from '../../../modules/product/productForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';
import { IUpdateProductArg } from './../../../modules/product/productForm';

export const handleUpdateProduct = createAsyncThunk<
  IProduct,
  IUpdateProductArg
>(
  'product/update',
  async ({ id, productValues }, { rejectWithValue }): Promise<IProduct> => {
    try {
      const response: any = await ProductService.updateProduct(
        id,
        productValues
      );
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
