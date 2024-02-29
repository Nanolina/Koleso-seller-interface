import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import {
  IColorsWithImagesData,
  IColorsWithImagesState,
} from '../../../modules/product/imageForm';
import { handleGetAllColorsWithImages } from '../../thunks/colorsWithImages';

export const getAllColorsWithImagesCases = (
  builder: ActionReducerMapBuilder<IColorsWithImagesState>
) => {
  builder
    .addCase(handleGetAllColorsWithImages.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleGetAllColorsWithImages.fulfilled,
      (state, action: PayloadAction<IColorsWithImagesData[]>) => {
        state.colorsWithImages = action.payload;
        state.loading = false;
      }
    )
    .addCase(handleGetAllColorsWithImages.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error =
        action.payload || 'Failed to get all images by productId';
    });
};
