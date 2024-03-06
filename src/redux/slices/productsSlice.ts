import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { IProductsState } from '../../modules/product/productForm';
import {
  createProductCases,
  getAllProductsCases,
  getProductByIdCases,
  recoverProductCases,
  recoverVariantCases,
  removeProductCases,
  updateProductCases,
  updateVariantsCases,
} from '../cases/product';
import { productsInitialState } from '../initialStates';

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  reducers: {
    toggleShowDeleted(state) {
      state.showDeleted = !state.showDeleted;
    },
    toggleShowDeletedVariants(state) {
      state.product.variants.showDeleted = !state.product.variants.showDeleted;
    },
    setVariantId(state, action: PayloadAction<string>) {
      state.product.variants.variantId = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IProductsState>) => {
    createProductCases(builder);
    getAllProductsCases(builder);
    getProductByIdCases(builder);
    updateProductCases(builder);
    updateVariantsCases(builder);
    removeProductCases(builder);
    recoverProductCases(builder);
    recoverVariantCases(builder);
  },
});

export const { toggleShowDeleted, toggleShowDeletedVariants, setVariantId } =
  productsSlice.actions;

export default productsSlice.reducer;
