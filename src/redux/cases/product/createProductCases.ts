import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import {
  IProduct,
  IProductState,
  IProductsState,
} from '../../../modules/product/productForm';
import { IVariantsState } from '../../../modules/product/variantForm';
import { handleCreateProduct } from '../../thunks/product';

export const createProductCases = (
  builder: ActionReducerMapBuilder<IProductsState>
) => {
  builder
    .addCase(handleCreateProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleCreateProduct.fulfilled,
      (state, action: PayloadAction<IProduct>) => {
        const updatedVariantsState: IVariantsState = {
          items: action.payload.variants,
          variantId: state.product.variants.variantId,
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
        state.success = 'The product has been successfully set up';
        state.loading = false;
      }
    )
    .addCase(handleCreateProduct.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to create new product';
    });
};
