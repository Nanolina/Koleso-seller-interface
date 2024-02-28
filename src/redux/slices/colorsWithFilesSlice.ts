import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IColorsWithFilesState } from '../../modules/product/imageForm';
import {
  createColorsWithFilesCases,
  getAllColorsWithFilesCases,
} from '../cases/files';
import { colorsWithFilesInitialState } from '../initialStates';

const colorsWithFilesSlice = createSlice({
  name: 'colorsWithFiles',
  initialState: colorsWithFilesInitialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IColorsWithFilesState>) => {
    createColorsWithFilesCases(builder);
    getAllColorsWithFilesCases(builder);
  },
});

export default colorsWithFilesSlice.reducer;
