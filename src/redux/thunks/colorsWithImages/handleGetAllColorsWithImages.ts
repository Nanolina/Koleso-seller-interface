import { createAsyncThunk } from '@reduxjs/toolkit';
import { IColorsWithImagesData } from '../../../modules/product/imageForm';
import { IGetAllColorsWithImagesArg } from '../../../modules/product/variantForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleGetAllColorsWithImages = createAsyncThunk<
  IColorsWithImagesData[],
  IGetAllColorsWithImagesArg
>(
  'colorsWithImages/get-all',
  async (
    { productId, organizationId },
    { rejectWithValue }
  ): Promise<IColorsWithImagesData[]> => {
    try {
      const response = await ProductService.getAllColorsWithImages(
        productId,
        organizationId
      );
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
