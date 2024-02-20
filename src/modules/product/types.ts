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
  parameters: IParameter[];
  colorWithImages: IColorWithImages[];
}

interface IImages {
  url: string;
  publicId: string;
}

export interface IProduct extends ICreateProductData {
  id: string;
  articleKoleso: string;
  userId: string;
  images: IImages[];
  color: ColorType;
  size?: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
}

export interface IProductsState {
  items: IProduct[];
  product: IProduct;
  groupedProducts: IGroupedProducts[];
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

export interface ICreateProductValuesProps {
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

// Parameters
export interface IParameter {
  id: string;
  color: ColorType;
  quantity: number;
  size?: string;
}

export interface IParameterProps extends ICreateProductValuesProps {
  parameter: IParameter;
}

export interface IGroupedProducts {
  groupId: string;
  name: string;
  finalPrice: number;
  brand?: string;
  model?: string;
}

// Images
export interface IColorWithImages {
  id: string;
  color: ColorType;
  images: string[];
}
