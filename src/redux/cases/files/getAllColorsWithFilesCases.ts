import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import {
  IColorsWithFiles,
  IColorsWithFilesState,
} from '../../../modules/product/imageForm';
import { handleGetAllColorsWithFiles } from '../../thunks/colorsWithFiles';

export const getAllColorsWithFilesCases = (
  builder: ActionReducerMapBuilder<IColorsWithFilesState>
) => {
  builder
    .addCase(handleGetAllColorsWithFiles.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleGetAllColorsWithFiles.fulfilled,
      (state, action: PayloadAction<IColorsWithFiles[]>) => {
        state.colorsWithFiles = action.payload;
        state.loading = false;
      }
    )
    .addCase(handleGetAllColorsWithFiles.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error =
        action.payload || 'Failed to get all colors with files by productId';
    });
};
