import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import {
  IProduct,
  IProductState,
  IProductsState,
} from '../../../modules/product/productForm';
import { IVariantsState } from '../../../modules/product/variantForm';
import { handleGetProductById } from '../../thunks/product';

export const getProductByIdCases = (
  builder: ActionReducerMapBuilder<IProductsState>
) => {
  builder
    .addCase(handleGetProductById.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleGetProductById.fulfilled,
      (state, action: PayloadAction<IProduct>) => {
        const updatedVariantsState: IVariantsState = {
          items: action.payload.variants,
          showDeleted: state.product.variants.showDeleted,
          loading: false,
          success: null,
          error: null,
        };

        const updatedProductState: IProductState = {
          ...action.payload,
          variants: updatedVariantsState,
        };

        state.product = updatedProductState;
        state.loading = false;
        state.isProductFound = true;
      }
    )
    .addCase(handleGetProductById.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to get product by id';
      state.isProductFound = false;
    });
};
