import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const createValueReducers = <T>(initialState: T) => {
  return createSlice({
    name: 'value',
    initialState,
    reducers: {
      setValue: (
        state,
        action: PayloadAction<{ key: keyof T; value: any }>
      ) => {
        const { key, value } = action.payload;
        (state as T)[key] = value;
      },
      resetValue: (state, action: PayloadAction<{ key: keyof T }>) => {
        const { key } = action.payload;
        (state as T)[key] = initialState[key];
      },
    },
  });
};
