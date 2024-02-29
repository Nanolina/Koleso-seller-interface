import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  IColorsWithImagesData,
  IUpdateColorsWithImagesArg,
} from '../../../modules/product/imageForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleUpdateColorsWithImages = createAsyncThunk<
  IColorsWithImagesData[],
  IUpdateColorsWithImagesArg
>(
  'colorsWithImages/update',
  async (
    { productId, imagesFormData },
    { rejectWithValue }
  ): Promise<IColorsWithImagesData[]> => {
    try {
      const response: any = await ProductService.updateColorsWithImages(
        productId,
        imagesFormData
      );
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
