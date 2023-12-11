import { ChangeEvent } from 'react';
import { SetStateAction } from '../../types';

export interface IParameter {
  id: string;
  color?: string;
  quantity?: string;
  size?: string;
}

export interface IParameterProps {
  parameter: IParameter;
}

export interface IProductCreationActionPayload {
  id: string;
  [key: string]: any;
}

export interface IPhotosWith1Color {
  color: string;
  photos: string[];
}

export interface IProductCreationState {
  compositions: IComposition[];
  parameters: IParameter[];
  colorsWithPhotos: IPhotosWith1Color[];
}

export interface IProductCreationStringsState {
  title: string;
  brand: string;
  model: string;
  articleSupplier?: string;
  gender?: string;
  section: string;
  category: string;
  subcategory?: string;
  description: string;
  oldPrice: string;
  price: string;
}

export type ISetValuePayloadProductCreation = {
  key: keyof IProductCreationStringsState;
  value: any;
};

export type IResetValuePayloadProductCreation = {
  key: keyof IProductCreationStringsState;
};

// Composition
export interface IComposition {
  title: string;
  percentage: number;
}

export interface IAddPercentageProps {
  materialPercentage: number;
  setMaterialPercentage: SetStateAction<number>;
}

export interface ICompositionProps {
  material: IComposition;
  handleRemoveComposition: (title: string) => void;
}

export interface IChangeCompositionPayload {
  material: string;
  materialPercentage: number;
}

export interface IFileInputProps {
  color: string;
}

export interface IParameterHandlersReturn {
  handleQuantityUpdate: (quantity: string) => void;
  handleSizeUpdate: (size: string) => void;
  handleRemoveParameter: () => void;
  handleCopyParameter: () => void;
}

export interface IProductFormReturn {
  handleChange: (
    key: keyof IProductCreationStringsState
  ) => (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  handleReset: (key: keyof IProductCreationStringsState) => void;
}

export interface IFileHandlerReturn {
  handleFileSelect: (
    color: string,
    currentPhotos: string[]
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IColorSelectionReturn {
  handleAddColor: (value: string) => void;
  existingColors: string[];
}
