import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import {
  IColorsWithFiles,
  IColorsWithFilesState,
} from '../../../modules/product/imageForm';
import { handleUpdateColorsWithFiles } from '../../thunks/colorsWithFiles';

export const createColorsWithFilesCases = (
  builder: ActionReducerMapBuilder<IColorsWithFilesState>
) => {
  builder
    .addCase(handleUpdateColorsWithFiles.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleUpdateColorsWithFiles.fulfilled,
      (state, action: PayloadAction<IColorsWithFiles[]>) => {
        state.colorsWithFiles = action.payload;
        state.success = 'Colors with files has been successfully set up';
        state.loading = false;
      }
    )
    .addCase(handleUpdateColorsWithFiles.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to create colors with files';
    });
};
