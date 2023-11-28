export type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

export interface IProductCreationState {
  title: string;
  brand: string;
  model: string;
  articleSupplier: string;
  gender: string;
}

export interface ISetValuePayload {
  key: keyof IProductCreationState;
  value: any;
}
