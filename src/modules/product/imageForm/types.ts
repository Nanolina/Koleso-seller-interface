import { FormikProps } from 'formik';
import { ColorType } from '../types';

export interface IUpdateColorsWithImagesData {
  colorsWithImages: IColorsWithImagesData[];
}

export interface IColorsWithImagesData {
  color: ColorType;
  images: (File | string)[];
}

export interface IImageUploadProps {
  values: IUpdateColorsWithImagesData;
  setFieldValue: FormikProps<IUpdateColorsWithImagesData>['setFieldValue'];
}

export interface IImagePreviewsProps {
  colorsWithImages: IColorsWithImagesData[];
  setFieldValue: FormikProps<IUpdateColorsWithImagesData>['setFieldValue'];
  images: (File | string)[];
  color: ColorType;
}

export interface IColorsWithImagesState {
  colorsWithImages: IColorsWithImagesData[];
  loading: boolean;
  success: string | null;
  error: any;
}

export interface IUpdateColorsWithImagesArg {
  productId: string;
  imagesFormData: FormData;
}
