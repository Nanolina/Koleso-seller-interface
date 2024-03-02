import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IStoresState } from '../../modules/stores';
import {
  createStoreCases,
  getAllStoresCases,
  getStoreByIdCases,
  recoverStoreCases,
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
    getStoreByIdCases(builder);
    updateStoreCases(builder);
    removeStoreCases(builder);
    recoverStoreCases(builder);
  },
});

export default storesSlice.reducer;
