import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetValuePayload } from '../types';

export const createValueReducers = (initialState: any) => {
  return createSlice({
    name: 'value',
    initialState,
    reducers: {
      setValue: (state, action: PayloadAction<ISetValuePayload>) => {
        const { key, value } = action.payload;
        state[key] = value;
      },
      resetValue: (state, action: PayloadAction<ISetValuePayload>) => {
        const { key } = action.payload;
        state[key] = null;
      },
    },
  });
};
