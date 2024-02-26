import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import {
  ICatalogStructureState,
  ISectionType,
} from '../../../modules/product/productForm';
import { handleGetCatalogStructure } from '../../thunks/catalog';

export const getCatalogStructureCases = (
  builder: ActionReducerMapBuilder<ICatalogStructureState>
) => {
  builder
    .addCase(handleGetCatalogStructure.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(
      handleGetCatalogStructure.fulfilled,
      (state, action: PayloadAction<ISectionType[]>) => {
        state.catalogStructure = action.payload;
        state.loading = false;
      }
    )
    .addCase(handleGetCatalogStructure.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to get catalog structure';
    });
};
