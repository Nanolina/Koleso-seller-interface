import { FormikProps } from 'formik';
import { ChangeEvent } from 'react';
import { ColorType } from '../types';
import { removeImages, updateImages } from './functions';
import { IColorsWithImages, ICreateImageData } from './types';

export const useImageHandler = () => {
  const handleFileSelect =
    (
      colorsWithImages: IColorsWithImages[],
      setFieldValue: FormikProps<ICreateImageData>['setFieldValue'],
      imagesWith1Color: IColorsWithImages
    ) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (!files || files.length === 0) return;

      // Limit the number of selected files based on the existing ones
      const allowedFilesCount = 5 - imagesWith1Color.images.length;

      const newImages = Array.from(files)
        .slice(0, allowedFilesCount) // Ensure not to exceed 5 images
        .map((file) => URL.createObjectURL(file));

      const updatedColorsWithImages = updateImages(
        colorsWithImages,
        imagesWith1Color.color,
        [...imagesWith1Color.images, ...newImages]
      );
      setFieldValue('colorsWithImages', updatedColorsWithImages);
    };

  const handleRemoveImage = (
    colorsWithImages: IColorsWithImages[],
    setFieldValue: FormikProps<ICreateImageData>['setFieldValue'],
    color: ColorType,
    imageToRemove: string
  ) => {
    URL.revokeObjectURL(imageToRemove);

    const updatedColorsWithImages = removeImages(
      colorsWithImages,
      color,
      imageToRemove
    );
    setFieldValue('colorsWithImages', updatedColorsWithImages);
  };

  return { handleFileSelect, handleRemoveImage };
};
