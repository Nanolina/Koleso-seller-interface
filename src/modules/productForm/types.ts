import { SetStateAction } from '../../types';

export type IParameter = {
  id: string;
  color?: string;
  quantity?: number;
  size?: string;
};

export type IParameterProps = {
  parameter: IParameter;
};

export type IProductCreationActionPayload = {
  id: string;
  [key: string]: any;
};

export type IProductCreationState = {
  compositions: IComposition[];
  parameters: IParameter[];
};

export type IProductCreationStringsState = {
  title: string;
  brand: string;
  model: string;
  articleSupplier: string;
  gender: string;
  section: string;
  category: string;
  subcategory?: string;
};

// Composition
export type IComposition = {
  title: string;
  percentage: number;
};

export type IAddPercentageProps = {
  materialPercentage: number;
  setMaterialPercentage: SetStateAction<number>;
};

export type ICompositionProps = {
  material: IComposition;
  handleRemoveComposition: (title: string) => void;
};

export type IChangeCompositionPayload = {
  material: string;
  materialPercentage: number;
};
