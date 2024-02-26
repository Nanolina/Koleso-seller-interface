import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IVariantsState } from '../../modules/product/variantForm';
import { createVariantsCases } from '../cases/variant';
import { variantsInitialState } from '../initialStates';

const variantsSlice = createSlice({
  name: 'variants',
  initialState: variantsInitialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IVariantsState>) => {
    createVariantsCases(builder);
  },
});

export default variantsSlice.reducer;
