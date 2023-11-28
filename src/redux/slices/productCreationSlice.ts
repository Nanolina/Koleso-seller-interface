import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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
  },
});

export default productCreationSlice.reducer;
export const { updateParameter } = productCreationSlice.actions;
