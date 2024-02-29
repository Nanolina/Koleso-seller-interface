import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import {
  IColorsWithImagesData,
  IColorsWithImagesState,
} from '../../../modules/product/imageForm';
import { handleUpdateColorsWithImages } from '../../thunks/colorsWithImages';

export const createColorsWithImagesCases = (
  builder: ActionReducerMapBuilder<IColorsWithImagesState>
) => {
  builder
    .addCase(handleUpdateColorsWithImages.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleUpdateColorsWithImages.fulfilled,
      (state, action: PayloadAction<IColorsWithImagesData[]>) => {
        state.colorsWithImages = action.payload;
        state.success = 'Images has been successfully set up';
        state.loading = false;
      }
    )
    .addCase(handleUpdateColorsWithImages.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to update images';
    });
};
