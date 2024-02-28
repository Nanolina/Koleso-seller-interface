import { FormikProps } from 'formik';
import { ColorType } from '../types';

export interface IUpdateColorsWithFilesData {
  colorsWithFiles: IColorsWithFiles[];
}

export interface IColorsWithFiles {
  color: ColorType;
  files: File[];
}

export interface IImageUploadProps {
  values: IUpdateColorsWithFilesData;
  setFieldValue: FormikProps<IUpdateColorsWithFilesData>['setFieldValue'];
}

export interface IImagePreviewsProps {
  colorsWithFiles: IColorsWithFiles[];
  setFieldValue: FormikProps<IUpdateColorsWithFilesData>['setFieldValue'];
  files: File[];
  color: ColorType;
}

export interface IColorsWithFilesState {
  colorsWithFiles: IColorsWithFiles[];
  loading: boolean;
  success: string | null;
  error: any;
}

export interface IUpdateColorsWithImagesArg {
  productId: string;
  filesFormData: FormData;
}
