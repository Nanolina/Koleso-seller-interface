import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ICreateVariantsArg,
  ICreateVariantsData,
} from '../../../modules/product/variantForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleCreateVariants = createAsyncThunk<
  ICreateVariantsData,
  ICreateVariantsArg
>(
  'variants/create',
  async (
    { variants, productId },
    { rejectWithValue }
  ): Promise<ICreateVariantsData> => {
    try {
      const response: any = await ProductService.createVariants(
        { variants },
        productId
      );
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
