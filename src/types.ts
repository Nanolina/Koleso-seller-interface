import { IProductCreationStringsState } from './modules/productForm';

export type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

export type ISetValuePayload = {
  key: keyof IProductCreationStringsState;
  value: any;
};
