import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { ICatalogStructureState } from '../../modules/product/productForm';
import { getCatalogStructureCases } from '../cases/catalog';
import { catalogStructureInitialState } from '../initialStates';

const catalogStructureSlice = createSlice({
  name: 'catalogStructure',
  initialState: catalogStructureInitialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<ICatalogStructureState>) => {
    getCatalogStructureCases(builder);
  },
});

export default catalogStructureSlice.reducer;
