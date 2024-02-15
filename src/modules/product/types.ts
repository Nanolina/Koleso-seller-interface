import {
  FormikErrors,
  FormikHelpers,
  FormikProps,
  FormikTouched,
} from 'formik';

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

interface IComposition {
  title: string;
  percentage: number;
}

export interface IProduct {
  id: string;
  storeId: string;
  name: string;
  description?: string;
  brand?: string;
  model?: string;
  articleSupplier?: string;
  articleKoleso: string;
  image: string;
  imagePublicId: string;
  color: ColorType;
  size?: string;
  gender?: GenderType;
  composition: IComposition[];
  quantity: number;
  // priceWithoutDiscount: number;
  // finalPrice: number;
  userId: string;
  sectionId: number;
  categoryId: number;
  subcategoryId: number;
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

export interface ICreateProductData {
  storeId: string;
  name: string;
  description?: string;
  brand?: string;
  model?: string;
  articleSupplier?: string;
  image: string;
  color: ColorType;
  size?: string;
  gender?: GenderType;
  composition: IComposition[];
  quantity: number;
  // priceWithoutDiscount: number;
  // finalPrice: number;
  sectionId: number;
  categoryId: number;
  subcategoryId: number;
}

export interface IProductFormFieldsProps {
  values: ICreateProductData;
  setFieldValue: FormikProps<ICreateProductData>['setFieldValue'];
  errors: FormikErrors<ICreateProductData>;
  touched: FormikTouched<ICreateProductData>;
  resetForm: FormikHelpers<ICreateProductData>['resetForm'];
  initialValuesProduct: ICreateProductData;
}
