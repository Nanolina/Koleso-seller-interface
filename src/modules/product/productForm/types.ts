import {
  FormikErrors,
  FormikHelpers,
  FormikProps,
  FormikTouched,
} from 'formik';
import { SetStateAction } from '../../../types';

export enum GenderType {
  Male,
  Female,
}

export interface ICreateProductData {
  storeId: string;
  name: string;
  description?: string;
  brand?: string;
  model?: string;
  gender?: GenderType;
  sectionId: number;
  categoryId?: number;
  subcategoryId?: number;
  composition?: IComposition[];
}

export interface IProduct extends ICreateProductData {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProductFormFieldsProps {
  values: ICreateProductData;
  setFieldValue: FormikProps<ICreateProductData>['setFieldValue'];
  errors: FormikErrors<ICreateProductData>;
  touched: FormikTouched<ICreateProductData>;
  resetForm: FormikHelpers<ICreateProductData>['resetForm'];
  initialValuesProduct: ICreateProductData;
}

export interface ICreateProductValuesProps {
  values: ICreateProductData;
  setFieldValue: FormikProps<ICreateProductData>['setFieldValue'];
}

// Catalog
export interface ICatalogItemType {
  id: number;
  image?: string;
  title: string;
}

export interface ICategoryType extends ICatalogItemType {
  subcategories?: ICatalogItemType[];
}

export interface ISectionType extends ICatalogItemType {
  categories?: ICategoryType[];
}

export interface ICatalogStructureState {
  catalogStructure: ISectionType[];
  loading: boolean;
  error: any;
}

export interface IOptions {
  categoryOptions: ICategoryType[];
  subcategoryOptions: ICatalogItemType[];
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
  handleRemoveCompositionElem: (title: string) => void;
}

export interface IChangeCompositionPayload {
  material: string;
  materialPercentage: number;
}

export interface IProductsState {
  items: IProduct[];
  product: IProduct;
  success: string | null;
  loading: boolean;
  error: any;
}
