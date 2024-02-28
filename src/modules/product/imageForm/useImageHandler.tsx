import { FormikProps } from 'formik';
import { ChangeEvent } from 'react';
import { ColorType } from '../types';
import { removeFiles, updateFiles } from './functions';
import { IColorsWithFiles, IUpdateColorsWithFilesData } from './types';

export const useImageHandler = () => {
  const handleFileSelect =
    (
      colorsWithFiles: IColorsWithFiles[],
      setFieldValue: FormikProps<IUpdateColorsWithFilesData>['setFieldValue'],
      filesWith1Color: IColorsWithFiles
    ) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (!files || files.length === 0) return;

      // Limit the number of selected files based on the existing ones
      const allowedFilesCount = 5 - filesWith1Color.files.length;

      const newFiles = Array.from(files).slice(0, allowedFilesCount);

      const updatedColorsWithFiles = updateFiles(
        colorsWithFiles,
        filesWith1Color.color,
        [...filesWith1Color.files, ...newFiles]
      );
      setFieldValue('colorsWithFiles', updatedColorsWithFiles);
    };

  const handleRemoveFile = (
    colorsWithFiles: IColorsWithFiles[],
    setFieldValue: FormikProps<IUpdateColorsWithFilesData>['setFieldValue'],
    color: ColorType,
    indexToRemove: number
  ) => {
    const updatedColorsWithFiles = removeFiles(
      colorsWithFiles,
      color,
      indexToRemove
    );
    setFieldValue('colorsWithFiles', updatedColorsWithFiles);
  };

  return { handleFileSelect, handleRemoveFile };
};
