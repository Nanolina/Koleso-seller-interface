import { createAsyncThunk } from '@reduxjs/toolkit';
import { IColorsWithImagesData } from '../../../modules/product/imageForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleGetAllColorsWithImages = createAsyncThunk(
  'colorsWithImages/get-all',
  async (
    productId: string,
    { rejectWithValue }
  ): Promise<IColorsWithImagesData[]> => {
    try {
      const response = await ProductService.getAllColorsWithImages(productId);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
