import { FormikErrors, FormikProps, FormikTouched } from 'formik';
import { ChangeEventHandler } from 'react';
import { SetStateAction } from '../../../types';
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

export interface IAddVariantsProps {
  values: IUpdateVariantsData;
  setFieldValue: FormikProps<IUpdateVariantsData>['setFieldValue'];
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
}

export interface IVariantProps extends IAddVariantsProps {
  variant: IVariant;
}

export interface IVariantsTableProps extends IAddVariantsProps {
  setModalOpen: SetStateAction<boolean>;
}

export interface IVariantsTableRowProps {
  variant: IVariant;
  index: number;
  variants: IVariant[];
  setFieldValue: (field: string, value: any) => void;
  variantErrors?: IVariantErrors;
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
  setModalOpen: (isOpen: boolean) => void;
}

export interface IVariantInputProps {
  variant: IVariant;
  name: string;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  errors: any;
  touched: FormikTouched<any>;
}

export interface IVariantsRowButtonsProps {
  variant: IVariant;
  setModalOpen: (isOpen: boolean) => void;
  handleCopyVariant: (variantId: string) => void;
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
  variantId: string;
  showDeleted: boolean;
  loading: boolean;
  success: string | null;
  error: any;
}

export interface IUpdateVariantsArg {
  productId: string;
  variants: IVariant[];
}
