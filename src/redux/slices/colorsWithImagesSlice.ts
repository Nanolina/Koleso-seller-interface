import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IColorsWithImagesState } from '../../modules/product/imageForm';
import { getAllColorsWithImagesCases } from '../cases/image';
import { colorsWithImagesInitialState } from '../initialStates';

const colorsWithImagesSlice = createSlice({
  name: 'colorsWithImages',
  initialState: colorsWithImagesInitialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IColorsWithImagesState>) => {
    getAllColorsWithImagesCases(builder);
  },
});

export default colorsWithImagesSlice.reducer;
