import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  IColorsWithFiles,
  IUpdateColorsWithImagesArg,
} from '../../../modules/product/imageForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleUpdateColorsWithFiles = createAsyncThunk<
  IColorsWithFiles[],
  IUpdateColorsWithImagesArg
>(
  'colorsWithFiles/update',
  async (
    { productId, filesFormData },
    { rejectWithValue }
  ): Promise<IColorsWithFiles[]> => {
    try {
      const response: any = await ProductService.updateColorsWithImages(
        productId,
        filesFormData
      );
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
