import {
  FormikErrors,
  FormikHelpers,
  FormikProps,
  FormikTouched,
} from 'formik';
import { IFilterQuery } from '../../types';
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
  showDeleted: boolean;
  loading: boolean;
  error: any;
}

export interface IUpdateStoreArg {
  id: string;
  storeFormData: FormData;
  organizationId: string;
}

export interface IGetAllStoresArg {
  filter: IFilterQuery;
  organizationId: string;
}

export interface ICreateStoresArg {
  storeFormData: FormData;
  organizationId: string;
}

export interface IGetStoreByIdArg {
  id: string;
  organizationId: string;
}

export interface IImageProps {
  valuesImage?: string;
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
