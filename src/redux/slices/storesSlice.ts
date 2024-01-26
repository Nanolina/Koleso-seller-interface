import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IStoresState } from '../../modules/stores';
import { createStoreCases } from '../cases/store';
import { storesInitialState } from '../initialStates';
import { createValueReducers } from '../sliceHelpers';

const storesSlice = createValueReducers(
  storesInitialState,
  (builder: ActionReducerMapBuilder<IStoresState>) => {
    createStoreCases(builder);
  }
);

export default storesSlice.reducer;
