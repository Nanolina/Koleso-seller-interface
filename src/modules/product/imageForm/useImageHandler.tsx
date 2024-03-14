import { FormikProps } from 'formik';
import { TFunction } from 'i18next';
import { ChangeEvent } from 'react';
import { ColorType } from '../types';
import { removeImages, updateImages } from './functions';
import { IColorsWithImagesData, IUpdateColorsWithImagesData } from './types';

export const useImageHandler = () => {
  const handleFileSelect =
    (
      colorsWithImages: IColorsWithImagesData[],
      setFieldValue: FormikProps<IUpdateColorsWithImagesData>['setFieldValue'],
      imagesWith1Color: IColorsWithImagesData,
      setError: React.Dispatch<React.SetStateAction<string | null>>,
      t: TFunction<'translation', undefined>
    ) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const images = event.target.files;
      if (!images || images.length === 0) return;

      // Limit the number of selected images based on the existing ones
      const allowedImagesCount = 5 - imagesWith1Color.images.length;

      const newImages = Array.from(images).slice(0, allowedImagesCount);

      for (const image of newImages) {
        const correctImageFormats = [
          'image/jpeg',
          'image/jpg',
          'image/png',
        ].includes(image.type);
        if (!correctImageFormats) {
          setError('');
          setTimeout(
            () => setError(t('products.image.validation.imageNotFormat')),
            0
          );
          return;
        }

        if (image.size >= 512000) { // 500 MB
          setError('');
          setTimeout(
            () => setError(t('products.image.validation.imageVeryBigSize')),
            0
          );
          return;
        }
      }

      const updatedColorsWithImages = updateImages(
        colorsWithImages,
        imagesWith1Color.color,
        [...imagesWith1Color.images, ...newImages]
      );
      setFieldValue('colorsWithImages', updatedColorsWithImages);
    };

  const handleRemoveImage = (
    imageUrlToRemove: string,
    indexToRemove: number,
    colorsWithImages: IColorsWithImagesData[],
    setFieldValue: FormikProps<IUpdateColorsWithImagesData>['setFieldValue'],
    color: ColorType
  ) => {
    const updatedColorsWithImages = removeImages(
      imageUrlToRemove,
      indexToRemove,
      colorsWithImages,
      color
    );
    setFieldValue('colorsWithImages', updatedColorsWithImages);
  };

  return { handleFileSelect, handleRemoveImage };
};
