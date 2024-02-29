import { FormikProps } from 'formik';
import { ChangeEvent } from 'react';
import { ColorType } from '../types';
import { removeImages, updateImages } from './functions';
import { IColorsWithImagesData, IUpdateColorsWithImagesData } from './types';

export const useImageHandler = () => {
  const handleFileSelect =
    (
      colorsWithImages: IColorsWithImagesData[],
      setFieldValue: FormikProps<IUpdateColorsWithImagesData>['setFieldValue'],
      imagesWith1Color: IColorsWithImagesData
    ) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const images = event.target.files;
      if (!images || images.length === 0) return;

      // Limit the number of selected images based on the existing ones
      const allowedImagesCount = 5 - imagesWith1Color.images.length;

      const newImages = Array.from(images).slice(0, allowedImagesCount);

      const updatedColorsWithImages = updateImages(
        colorsWithImages,
        imagesWith1Color.color,
        [...imagesWith1Color.images, ...newImages]
      );
      setFieldValue('colorsWithImages', updatedColorsWithImages);
    };

  const handleRemoveImage = (
    colorsWithImages: IColorsWithImagesData[],
    setFieldValue: FormikProps<IUpdateColorsWithImagesData>['setFieldValue'],
    color: ColorType,
    indexToRemove: number
  ) => {
    const updatedColorsWithImages = removeImages(
      colorsWithImages,
      color,
      indexToRemove
    );
    setFieldValue('colorsWithImages', updatedColorsWithImages);
  };

  return { handleFileSelect, handleRemoveImage };
};
