import {
  FormikErrors,
  FormikHelpers,
  FormikProps,
  FormikTouched,
} from 'formik';
import { SetStateAction } from '../../types';

export enum ColorType {
  Aquamarine,
  Beige,
  Black,
  Blue,
  Brown,
  Cherry,
  Cream,
  Emerald,
  Fuchsia,
  Golden,
  Green,
  Grey,
  LightBlue,
  Lilac,
  Maroon,
  Olive,
  Orange,
  Pink,
  Purple,
  Raspberry,
  Red,
  Sandy,
  Silver,
  Turquoise,
  Violet,
  White,
  Yellow,
}

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
  articleSupplier?: string;
  priceWithoutDiscount: number;
  finalPrice: number;
  gender?: GenderType;
  sectionId: number;
  categoryId?: number;
  subcategoryId?: number;
  composition?: IComposition[];
  image: string;
  color?: ColorType;
  size?: string;
  quantity: number;
}

export interface IProduct extends ICreateProductData {
  id: string;
  articleKoleso: string;
  imagePublicId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProductsState {
  items: IProduct[];
  product: IProduct;
  success: string | null;
  loading: boolean;
  error: any;
}

export interface IProductFormFieldsProps {
  values: ICreateProductData;
  setFieldValue: FormikProps<ICreateProductData>['setFieldValue'];
  errors: FormikErrors<ICreateProductData>;
  touched: FormikTouched<ICreateProductData>;
  resetForm: FormikHelpers<ICreateProductData>['resetForm'];
  initialValuesProduct: ICreateProductData;
}

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

export interface ICatalogStructureSelectsProps {
  values: ICreateProductData;
  setFieldValue: FormikProps<ICreateProductData>['setFieldValue'];
}

export interface IAddCompositionProps {
  values: ICreateProductData;
  setFieldValue: FormikProps<ICreateProductData>['setFieldValue'];
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

export interface ICompositionsProps {
  setFieldValue: FormikProps<ICreateProductData>['setFieldValue'];
}
