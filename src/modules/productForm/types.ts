import { SetStateAction } from '../../types';

export interface IParameter {
  id: string;
  color?: string;
  quantity?: number;
  size?: string;
}

export interface IParameterProps {
  parameter: IParameter;
}

export interface IProductCreationActionPayload {
  id: string;
  [key: string]: any;
}

export interface IProductCreationState {
  compositions: IComposition[];
  parameters: IParameter[];
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
}

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
