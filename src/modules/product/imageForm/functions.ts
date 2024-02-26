import { ColorType } from '../types';
import { IVariant } from '../variantForm/types';
import { IColorsWithImages } from './types';

// Update
export const updateImages = (
  colorsWithImages: IColorsWithImages[],
  color: ColorType,
  newImages: string[]
) => {
  return colorsWithImages.map((imagesWith1Color) => {
    if (imagesWith1Color.color === color) {
      // Add new images to existing ones, remove duplicates, and ensure there are no more than 5 images total
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
  existingColorsWithImages: IColorsWithImages[]
) => {
  const newImagesWith1Color = {
    color,
    images: [],
  };
  return [...existingColorsWithImages, newImagesWith1Color];
};

// Remove object with color
export const removeColor = (
  colorsWithImages: IColorsWithImages[],
  color: ColorType
) => {
  return colorsWithImages.filter(
    (imagesWith1Color) => imagesWith1Color.color !== color
  );
};

// Remove a 1 image from the array of images for 1 color
export const removeImages = (
  colorsWithImages: IColorsWithImages[],
  color: ColorType,
  removedImage: string
): IColorsWithImages[] => {
  return colorsWithImages.map((item) => {
    if (item.color === color) {
      const newImages = item.images.filter(
        (image: string) => image !== removedImage
      );

      return { ...item, images: newImages };
    }

    return item;
  });
};

// Local storage
export const updateColorsWithImagesLocalStorage = (
  newColorsWithImages: any
) => {
  const currentData = JSON.parse(localStorage.getItem('product') || '{}');
  currentData['colorsWithImages'] = newColorsWithImages;
  localStorage.setItem('product', JSON.stringify(currentData));
};

// Get unique colors
export const getExistingUniqueColors = () => {
  const savedProductVariants: IVariant[] | undefined = JSON.parse(
    localStorage.getItem('product') || '{}'
  ).variants;

  const set = new Set<ColorType>();
  if (savedProductVariants) {
    savedProductVariants.forEach((variant: IVariant) => set.add(variant.color));
  }

  return [...set];
};
