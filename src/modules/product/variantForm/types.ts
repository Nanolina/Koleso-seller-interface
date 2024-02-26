import { FormikErrors, FormikProps, FormikTouched } from 'formik';
import { ColorType } from '../types';

export interface ICreateVariantsData {
  variants: IVariant[];
}

export interface IVariant {
  id: string;
  color: ColorType;
  quantity: number;
  size?: string;
  priceWithoutDiscount: number;
  finalPrice: number;
  articleSupplier?: string;
}

export interface IVariantProps {
  variant: IVariant;
  values: ICreateVariantsData;
  setFieldValue: FormikProps<ICreateVariantsData>['setFieldValue'];
  errors: IVariantErrors | undefined;
  touched: FormikTouched<ICreateVariantsData>;
}

export interface IVariantsProps {
  values: ICreateVariantsData;
  setFieldValue: FormikProps<ICreateVariantsData>['setFieldValue'];
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
}

export interface IVariantErrors {
  color?: string;
  quantity?: string;
  size?: string;
  priceWithoutDiscount?: string;
  finalPrice?: string;
  articleSupplier?: string;
}

export interface IVariantsState {
  loading: boolean;
  success: string | null;
  error: any;
}

export interface ICreateVariantsArg {
  productId: string;
  variants: IVariant[];
}
