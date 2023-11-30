import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import {
  IChangeCompositionPayload,
  IComposition,
  IParameter,
  IProductCreationActionPayload,
  IProductCreationState,
} from '../../modules/productForm';

const productCreationSlice = createSlice({
  name: 'productCreation',
  initialState: {
    compositions: [],
    parameters: [],
    colorfulPhotos: [],
  } as IProductCreationState,
  reducers: {
    changeComposition: (
      state,
      action: PayloadAction<IChangeCompositionPayload>
    ) => {
      const { material, materialPercentage } = action.payload;

      // Find already added material
      const existingMaterial = state.compositions.find(
        (composition) => composition.title === material
      );

      /**
       * If no such material already existed and
       * we have the material title and percentages,
       * we add to the compositions
       * */
      if (material && materialPercentage && !existingMaterial) {
        state.compositions.push({
          title: material,
          percentage: materialPercentage,
        });
      }
    },

    removeComposition: (state, action: PayloadAction<string>) => {
      state.compositions = state.compositions.filter(
        (composition: IComposition) => composition.title !== action.payload
      );
    },

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

    addPhotos: (
      state,
      action: PayloadAction<{ color: string; photos: string[] }>
    ) => {
      const { color, photos } = action.payload;

      // Find already added colorfulPhotos with the same color
      const existingColorfulPhotos = state.colorfulPhotos.find(
        (item) => item.color === color
      );

      /**
       * If colorfulPhotos with the same color already exists,
       * update its photos array with the new photos
       */
      if (existingColorfulPhotos) {
        existingColorfulPhotos.photos = [
          ...existingColorfulPhotos.photos,
          ...photos,
        ];
      } else {
        // If no colorfulPhotos with the same color exist, add a new entry
        state.colorfulPhotos.push({ color, photos });
      }
    },

    removePhotoAction: (
      state,
      action: PayloadAction<{ color: string; index: number }>
    ) => {
      const { color, index } = action.payload;

      // Find colorfulPhotos with the same color
      const existingColorfulPhotos = state.colorfulPhotos.find(
        (item) => item.color === color
      );

      /**
       * If colorfulPhotos with the same color exist,
       * remove the photo at the specified index
       */
      if (existingColorfulPhotos) {
        const updatedPhotos = existingColorfulPhotos.photos.filter(
          (_, i) => i !== index
        );
        existingColorfulPhotos.photos = updatedPhotos;
      }
    },
  },
});

export default productCreationSlice.reducer;
export const {
  changeComposition,
  removeComposition,
  updateParameter,
  removeParameter,
  copyParameter,
  addPhotos,
  removePhotoAction,
} = productCreationSlice.actions;
