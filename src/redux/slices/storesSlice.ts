import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IStoresState } from '../../modules/stores';
import {
  createStoreCases,
  getAllStoresCases,
  removeStoreCases,
  updateStoreCases,
} from '../cases/store';
import { storesInitialState } from '../initialStates';

const storesSlice = createSlice({
  name: 'stores',
  initialState: storesInitialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IStoresState>) => {
    createStoreCases(builder);
    getAllStoresCases(builder);
    updateStoreCases(builder);
    removeStoreCases(builder);
  },
});

export default storesSlice.reducer;
