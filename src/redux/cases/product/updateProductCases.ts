import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import {
  IProduct,
  IProductState,
  IProductsState,
} from '../../../modules/product/productForm';
import { IVariantsState } from '../../../modules/product/variantForm';
import { handleUpdateProduct } from '../../thunks/product';

export const updateProductCases = (
  builder: ActionReducerMapBuilder<IProductsState>
) => {
  builder
    .addCase(handleUpdateProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleUpdateProduct.fulfilled,
      (state, action: PayloadAction<IProduct>) => {
        const updatedVariantsState: IVariantsState = {
          items: action.payload.variants,
          loading: false,
          success: null,
          error: null,
        };

        const updatedProductState: IProductState = {
          ...action.payload,
          variants: updatedVariantsState,
        };

        state.product = updatedProductState;
        state.success = 'The product has been successfully updated';
        state.loading = false;
      }
    )
    .addCase(handleUpdateProduct.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to update the product';
    });
};
