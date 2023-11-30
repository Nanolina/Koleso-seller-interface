import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IResetValuePayloadProductCreation,
  ISetValuePayloadProductCreation,
} from '../modules/productForm';

export const createValueReducers = (initialState: any) => {
  return createSlice({
    name: 'value',
    initialState,
    reducers: {
      setValue: (
        state,
        action: PayloadAction<ISetValuePayloadProductCreation>
      ) => {
        const { key, value } = action.payload;
        state[key] = value;
      },
      resetValue: (
        state,
        action: PayloadAction<IResetValuePayloadProductCreation>
      ) => {
        const { key } = action.payload;
        state[key] = '';
      },
    },
  });
};
