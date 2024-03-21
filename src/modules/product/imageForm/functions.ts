import { ColorType } from '../types';
import { IVariant } from '../variantForm/types';
import { IColorsWithImagesData } from './types';

// Update
export const updateImages = (
  colorsWithImages: IColorsWithImagesData[],
  color: ColorType,
  newImages: (File | string)[]
) => {
  return colorsWithImages.map((imagesWith1Color) => {
    if (imagesWith1Color.color === color) {
      /**
       *  Add new images to existing ones, remove duplicates,
       * and ensure there are no more than 5 images total
       **/
      const updatedImages = Array.from(
        new Set([...imagesWith1Color.images, ...newImages])
      ).slice(0, 5);
      return { ...imagesWith1Color, images: updatedImages };
    }
    return imagesWith1Color;
  });
};

// Create
export const createColorsWithImages = (
  color: ColorType,
  existingColorsWithImages: IColorsWithImagesData[]
) => {
  const newImagesWith1Color = {
    color,
    images: [],
  };
  return [...existingColorsWithImages, newImagesWith1Color];
};

// Remove object with color
export const removeColor = (
  colorsWithImages: IColorsWithImagesData[],
  color: ColorType
) => {
  return colorsWithImages.filter(
    (imagesWith1Color) => imagesWith1Color.color !== color
  );
};

// Remove a 1 image from the array of images for 1 color
export const removeImages = (
  imageUrlToRemove: string,
  indexToRemove: number,
  colorsWithImages: IColorsWithImagesData[],
  color: ColorType
): IColorsWithImagesData[] => {
  return colorsWithImages.map((imagesWith1Color) => {
    if (imagesWith1Color.color === color) {
      const newImages = imagesWith1Color.images.filter((image, index) => {
        const isRemoving = index === indexToRemove;
        if (isRemoving) {
          // Check if the image is a File object
          if (typeof image !== 'string') {
            // This is a File object, revoke its URL
            URL.revokeObjectURL(imageUrlToRemove);
          } else if (image === imageUrlToRemove) {
            // This is the URL string, revoke it
            URL.revokeObjectURL(imageUrlToRemove);
          }
        }
        return !isRemoving;
      });
      return { ...imagesWith1Color, images: newImages };
    }
    return imagesWith1Color;
  });
};

// Get unique colors
export const getExistingUniqueColors = (variants: IVariant[]) => {
  const set = new Set<string>();
  if (variants && variants.length) {
    variants.forEach((variant: IVariant) => set.add(variant.color.toString()));
  }

  return [...set];
};
