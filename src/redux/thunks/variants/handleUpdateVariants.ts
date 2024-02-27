import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  IUpdateVariantsArg,
  IVariant,
} from '../../../modules/product/variantForm';
import { ProductService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleUpdateVariants = createAsyncThunk<
  IVariant[],
  IUpdateVariantsArg
>(
  'variants/update',
  async ({ variants, productId }, { rejectWithValue }): Promise<IVariant[]> => {
    try {
      const response: any = await ProductService.updateVariants(
        { variants },
        productId
      );
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
