import { FormikProps } from 'formik';
import { ChangeEvent } from 'react';
import {
  removeImages,
  updateColorsWithImagesLocalStorage,
  updateImages,
} from '../functions';
import { ColorType, IColorsWithImages, ICreateProductData } from '../types';

export const useImageHandler = () => {
  const handleFileSelect =
    (
      colorsWithImages: IColorsWithImages[],
      setFieldValue: FormikProps<ICreateProductData>['setFieldValue'],
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
      updateColorsWithImagesLocalStorage(updatedColorsWithImages);
    };

  const handleRemoveImage = (
    colorsWithImages: IColorsWithImages[],
    setFieldValue: FormikProps<ICreateProductData>['setFieldValue'],
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
    updateColorsWithImagesLocalStorage(updatedColorsWithImages);
  };

  return { handleFileSelect, handleRemoveImage };
};
