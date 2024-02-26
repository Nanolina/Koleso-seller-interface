import {
  FormikErrors,
  FormikHelpers,
  FormikProps,
  FormikTouched,
} from 'formik';
import { ColorType } from '../types';

export interface ICreateVariantData {
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
  values: ICreateVariantData;
  setFieldValue: FormikProps<ICreateVariantData>['setFieldValue'];
  errors: IVariantErrors | undefined;
  touched: FormikTouched<ICreateVariantData>;
}

export interface IVariantsProps {
  values: ICreateVariantData;
  setFieldValue: FormikProps<ICreateVariantData>['setFieldValue'];
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
  resetForm?: FormikHelpers<ICreateVariantData>['resetForm'];
  initialValues?: ICreateVariantData;
}

export interface IVariantErrors {
  color?: string;
  quantity?: string;
  size?: string;
  priceWithoutDiscount?: string;
  finalPrice?: string;
  articleSupplier?: string;
}
