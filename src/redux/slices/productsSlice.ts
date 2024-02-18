import type { PayloadAction } from '@reduxjs/toolkit';
import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import {
  IChangeCompositionPayload,
  IProductsState,
} from '../../modules/product';
import {
  createProductCases,
  getAllProductsCases,
  getProductByIdCases,
} from '../cases/product';
import { productsInitialState } from '../initialStates';

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  reducers: {
    // Composition
    changeComposition: (
      state,
      action: PayloadAction<IChangeCompositionPayload>
    ) => {
      const { material, materialPercentage } = action.payload;
      const index = state.product.composition?.findIndex(
        (elem) => elem.title === material
      );

      if (index === -1 && material && materialPercentage) {
        state.product.composition?.push({
          title: material,
          percentage: materialPercentage,
        });
      }
    },
    removeCompositionElem: (state, action: PayloadAction<string>) => {
      state.product.composition = state.product.composition?.filter(
        (composition) => composition.title !== action.payload
      );
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IProductsState>) => {
    createProductCases(builder);
    getAllProductsCases(builder);
    getProductByIdCases(builder);
  },
});

export const { changeComposition, removeCompositionElem } =
  productsSlice.actions;

export default productsSlice.reducer;
