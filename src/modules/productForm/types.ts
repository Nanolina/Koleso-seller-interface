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
  parameters: IParameter[];
};

export type IProductCreationStringsState = {
  title: string;
  brand: string;
  model: string;
  articleSupplier: string;
  gender: string;
};
