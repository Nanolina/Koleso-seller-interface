import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetValuePayloadDocuments } from '../modules/documentsForm';

export const createValueReducers = (initialState: any) => {
  return createSlice({
    name: 'value',
    initialState,
    reducers: {
      setValue: (state, action: PayloadAction<ISetValuePayloadDocuments>) => {
        const { key, value } = action.payload;
        state[key] = value;
      },
    },
  });
};
