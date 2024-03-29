import { FormikErrors, FormikProps, FormikTouched } from 'formik';
import { ChangeEventHandler } from 'react';
import { IImage } from '../../image';
import { ColorType } from '../types';

export interface IUpdateVariantsData {
  variants: IVariant[];
}

interface ICreateVariantData {
  color: ColorType;
  quantity: number;
  size?: string;
  priceWithoutDiscount: number;
  finalPrice: number;
  articleSupplier?: string;
}

export interface IVariant extends ICreateVariantData {
  id: string;
  articleKoleso: string;
  productId: string;
  isActive: boolean;
  images: IImage[];
  createdAt: string;
  updatedAt: string;
  [key: string]: any;
}

export interface IVariantsProps {
  values: IUpdateVariantsData;
  setFieldValue: FormikProps<IUpdateVariantsData>['setFieldValue'];
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
}

export interface IVariantProps extends IVariantsProps {
  variant: IVariant;
}

export interface IVariantsTableRowProps extends IVariantProps {
  index: number;
  variantErrors?: IVariantErrors;
}

export interface IVariantInputProps {
  variant: IVariant;
  name: string;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  required: boolean;
  errors: any;
  touched: FormikTouched<any>;
}

export interface IVariantsRowButtonsProps {
  variant: IVariant;
  handleCopyVariant: (variantId: string) => void;
  values: IUpdateVariantsData;
  setFieldValue: (field: string, value: any) => void;
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
  items: IVariant[];
  showDeleted: boolean;
  loading: boolean;
  success: string | null;
  error: any;
}

export interface IUpdateVariantsArg {
  productId: string;
  variants: IVariant[];
  organizationId: string;
}

export interface IGetAllColorsWithImagesArg {
  productId: string;
  organizationId: string;
}
