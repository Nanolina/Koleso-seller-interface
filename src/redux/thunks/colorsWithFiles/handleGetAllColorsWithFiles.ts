import { createAsyncThunk } from '@reduxjs/toolkit';
import { IColorsWithFiles } from '../../../modules/product/imageForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleGetAllColorsWithFiles = createAsyncThunk(
  'colorsWithFiles/get-all',
  async (
    productId: string,
    { rejectWithValue }
  ): Promise<IColorsWithFiles[]> => {
    try {
      const response = await ProductService.getAllColorsWithImages(productId);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
