import { FormikProps } from 'formik';
import { ChangeEvent } from 'react';
import { ColorType } from '../types';

export interface ICreateImageData {
  colorsWithImages: IColorsWithImages[];
}

export interface IColorsWithImages {
  color: ColorType;
  images: string[];
}

export interface IImageUploadProps {
  values: ICreateImageData;
  setFieldValue: FormikProps<ICreateImageData>['setFieldValue'];
}

export interface IImagePreviewsProps {
  colorsWithImages: IColorsWithImages[];
  setFieldValue: FormikProps<ICreateImageData>['setFieldValue'];
  color: ColorType;
  images: string[];
}

export interface IFileHandlerReturn {
  handleFileSelect: (
    color: string,
    currentPhotos: string[]
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IColorsWithImagesState {
  colorsWithImages: IColorsWithImages[];
  loading: boolean;
  success: string | null;
  error: any;
}
