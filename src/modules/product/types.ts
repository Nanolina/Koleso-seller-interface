import {
  FormikErrors,
  FormikHelpers,
  FormikProps,
  FormikTouched,
} from 'formik';
import { ChangeEvent } from 'react';
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
  gender?: GenderType;
  sectionId: number;
  categoryId?: number;
  subcategoryId?: number;
  composition?: IComposition[];
  variants: IVariant[];
  colorsWithImages: IColorsWithImages[];
}

interface IImages {
  id: string;
  url: string;
  publicId: string;
  variantId?: string;
  storeId?: string;
}

export interface IProduct extends ICreateProductData {
  id: string;
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

// Variants
export interface IVariant {
  id: string;
  color: ColorType;
  quantity: number;
  size?: string;
  priceWithoutDiscount: number;
  finalPrice: number;
  articleSupplier?: string;
}

export interface IVariantErrors {
  color?: string;
  quantity?: string;
  size?: string;
  priceWithoutDiscount?: string;
  finalPrice?: string;
  articleSupplier?: string;
}

export interface ICreateProductValuesProps {
  values: ICreateProductData;
  setFieldValue: FormikProps<ICreateProductData>['setFieldValue'];
}

export interface IVariantProps extends ICreateProductValuesProps {
  variant: IVariant;
  errors: IVariantErrors | undefined;
  touched: FormikTouched<ICreateProductData>;
}

export interface IVariantsProps {
  values: ICreateProductData;
  setFieldValue: FormikProps<ICreateProductData>['setFieldValue'];
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
}

// Images
export interface IColorsWithImages {
  color: ColorType;
  images: string[];
}

export interface IImagePreviewsProps {
  colorsWithImages: IColorsWithImages[];
  setFieldValue: FormikProps<ICreateProductData>['setFieldValue'];
  color: ColorType;
  images: string[];
}

export interface IFileHandlerReturn {
  handleFileSelect: (
    color: string,
    currentPhotos: string[]
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
}
