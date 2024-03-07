import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import {
  IProduct,
  IProductState,
  IProductsState,
} from '../../../modules/product/productForm';
import { IVariantsState } from '../../../modules/product/variantForm';
import { handleRecoverProduct } from '../../thunks/product';

export const recoverProductCases = (
  builder: ActionReducerMapBuilder<IProductsState>
) => {
  builder
    .addCase(handleRecoverProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleRecoverProduct.fulfilled,
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
    .addCase(handleRecoverProduct.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to recover product by id';
    });
};
