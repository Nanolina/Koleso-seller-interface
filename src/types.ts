export type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

export type IProductCreationActionPayload = {
  id: string;
  [key: string]: any;
};

export type IParameter = {
  id: string;
  color?: string;
  quantity?: number;
  size?: string;
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

export type ISetValuePayload = {
  key: keyof IProductCreationStringsState;
  value: any;
};
