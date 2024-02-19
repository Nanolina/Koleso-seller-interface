import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGroupedProducts } from '../../../modules/product';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleGetGroupedProducts = createAsyncThunk(
  'product/group',
  async (_, { rejectWithValue }): Promise<IGroupedProducts[]> => {
    try {
      // Submit a request
      const response = await ProductService.getGroupedProducts();

      // Return data to be saved in product
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
