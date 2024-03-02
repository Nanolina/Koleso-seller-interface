import {
  FormikErrors,
  FormikHelpers,
  FormikProps,
  FormikTouched,
} from 'formik';
import { IImage } from '../image';

export interface ICreateStoreData {
  name: string;
  description?: string;
  image?: File | string;
}

export interface IStore {
  id: string;
  name: string;
  description?: string;
  image?: IImage;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IStoresState {
  items: IStore[];
  store: IStore;
  success: string | null;
  isStoreFound: boolean;
  loading: boolean;
  error: any;
}

export interface IUpdateStoreArg {
  id: string;
  storeFormData: FormData;
}

export interface ILogoProps {
  valuesLogo?: string;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  previewUrl: string | null;
  setPreviewUrl: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface IStoreFormFieldsProps {
  values: ICreateStoreData;
  setFieldValue: FormikProps<ICreateStoreData>['setFieldValue'];
  errors: FormikErrors<ICreateStoreData>;
  touched: FormikTouched<ICreateStoreData>;
  resetForm: FormikHelpers<ICreateStoreData>['resetForm'];
  initialValuesStore: ICreateStoreData;
  previewUrl: string | null;
  setPreviewUrl: React.Dispatch<React.SetStateAction<string | null>>;
}
