import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import {
  IParameter,
  IProductCreationActionPayload,
  IProductCreationState,
} from '../../modules/productForm';

const productCreationSlice = createSlice({
  name: 'productCreation',
  initialState: {
    parameters: [],
  } as IProductCreationState,
  reducers: {
    updateParameter: (
      state,
      action: PayloadAction<IProductCreationActionPayload>
    ) => {
      const { id, ...newValues } = action.payload;

      // Check if there is an object with the given id in the array
      const index = state.parameters.findIndex(
        (parameter: IParameter) => parameter.id === id
      );

      // If an object with the same id is found, update its properties
      if (index !== -1) {
        state.parameters[index] = { ...state.parameters[index], ...newValues };
      } else {
        // If an object with this id is not found, add a new object
        state.parameters.push({ id, ...newValues });
      }
    },

    removeParameter: (state, action: PayloadAction<string>) => {
      state.parameters = state.parameters.filter(
        (parameter: IParameter) => parameter.id !== action.payload
      );
    },

    copyParameter: (state, action: PayloadAction<string>) => {
      const parameterWithId = state.parameters.find(
        (parameter) => parameter.id === action.payload
      );

      if (parameterWithId) {
        state.parameters.push({ ...parameterWithId, id: uuidv4() });
      }
    },
  },
});

export default productCreationSlice.reducer;
export const { updateParameter, removeParameter, copyParameter } =
  productCreationSlice.actions;
