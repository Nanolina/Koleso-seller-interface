import { createAsyncThunk } from '@reduxjs/toolkit';
import { IVariant } from '../../../modules/product/variantForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleGetAllVariants = createAsyncThunk(
  'variants/get-all',
  async (productId: string, { rejectWithValue }): Promise<IVariant[]> => {
    try {
      const response = await ProductService.getAllVariants(productId);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
