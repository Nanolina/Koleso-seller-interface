import { createAsyncThunk } from '@reduxjs/toolkit';
import { ISectionType } from '../../../modules/product/productForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleGetCatalogStructure = createAsyncThunk(
  'catalog',
  async (_, { rejectWithValue }): Promise<ISectionType[]> => {
    try {
      // Submit a request
      const response = await ProductService.getCatalogStructure();

      // Return data to be saved in catalog
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
