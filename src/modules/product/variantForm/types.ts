import { FormikErrors, FormikProps, FormikTouched } from 'formik';
import { ColorType } from '../types';

export interface IUpdateVariantsData {
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
  values: IUpdateVariantsData;
  setFieldValue: FormikProps<IUpdateVariantsData>['setFieldValue'];
  errors: IVariantErrors | undefined;
  touched: FormikTouched<IUpdateVariantsData>;
}

export interface IVariantsProps {
  values: IUpdateVariantsData;
  setFieldValue: FormikProps<IUpdateVariantsData>['setFieldValue'];
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
  variants: IVariant[];
  loading: boolean;
  success: string | null;
  error: any;
}

export interface IUpdateVariantsArg {
  productId: string;
  variants: IVariant[];
}
