import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IColorsWithImagesState } from '../../modules/product/imageForm';
import {
  createColorsWithImagesCases,
  getAllColorsWithImagesCases,
} from '../cases/images';
import { colorsWithImagesInitialState } from '../initialStates';

const colorsWithImagesSlice = createSlice({
  name: 'colorsWithImages',
  initialState: colorsWithImagesInitialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IColorsWithImagesState>) => {
    createColorsWithImagesCases(builder);
    getAllColorsWithImagesCases(builder);
  },
});

export default colorsWithImagesSlice.reducer;
