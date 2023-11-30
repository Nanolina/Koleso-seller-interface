import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import {
  IChangeCompositionPayload,
  IComposition,
  IParameter,
  IPhotosWith1Color,
  IProductCreationActionPayload,
  IProductCreationState,
} from '../../modules/productForm';

const productCreationSlice = createSlice({
  name: 'productCreation',
  initialState: {
    compositions: [],
    parameters: [],
    colorsWithPhotos: [],
  } as IProductCreationState,
  reducers: {
    // Compositions
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

    // Parameters
    addOrUpdateParameter: (
      state,
      action: PayloadAction<IProductCreationActionPayload>
    ) => {
      const { id, ...newValues } = action.payload;

      // Check if there is an object with the given id in the array
      const existingIndex = state.parameters.findIndex(
        (parameter: IParameter) => parameter.id === id
      );

      // If an object with the same id is found, update its properties
      if (existingIndex !== -1) {
        state.parameters[existingIndex] = {
          ...state.parameters[existingIndex],
          ...newValues,
        };
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
      const parameterToCopy = state.parameters.find(
        (parameter) => parameter.id === action.payload
      );

      if (parameterToCopy) {
        state.parameters.push({ ...parameterToCopy, id: uuidv4() });
      }
    },

    // ColorsWithPhotos
    addOrUpdateColorWithPhotos: (
      state,
      action: PayloadAction<{ color: string; photos?: string[] }>
    ) => {
      const { color, photos = [] } = action.payload;

      // Find index if already added color
      const existingColorIndex = state.colorsWithPhotos.findIndex(
        (item) => item.color === color
      );

      // If an object with the same color is found, update its properties
      if (existingColorIndex !== -1) {
        state.colorsWithPhotos[existingColorIndex].photos = [
          ...state.colorsWithPhotos[existingColorIndex].photos,
          ...photos,
        ];
      } else {
        // If an object with this color is not found, add a new object
        state.colorsWithPhotos.push({ color, photos });
      }
    },

    removePhoto: (
      state,
      action: PayloadAction<{ color: string; index: number }>
    ) => {
      const { color, index } = action.payload;

      // Find already added color
      const colorEntry = state.colorsWithPhotos.find(
        (item) => item.color === color
      );

      /**
       * If colorsWithPhotos with the same color exist,
       * remove the photo at the specified index
       */
      if (colorEntry) {
        colorEntry.photos = colorEntry.photos.filter((_, i) => i !== index);
      }
    },

    removePhotosWith1Color: (state, action: PayloadAction<string>) => {
      state.colorsWithPhotos = state.colorsWithPhotos.filter(
        (photosWith1Color: IPhotosWith1Color) =>
          photosWith1Color.color !== action.payload
      );
    },
  },
});

export default productCreationSlice.reducer;
export const {
  changeComposition,
  removeComposition,
  addOrUpdateParameter,
  removeParameter,
  copyParameter,
  addOrUpdateColorWithPhotos,
  removePhoto,
  removePhotosWith1Color,
} = productCreationSlice.actions;
