import { ColorType } from '../types';
import { IVariant } from '../variantForm/types';
import { IColorsWithFiles } from './types';

// Update
export const updateFiles = (
  colorsWithFiles: IColorsWithFiles[],
  color: ColorType,
  newFiles: File[]
) => {
  return colorsWithFiles.map((filesWith1Color) => {
    if (filesWith1Color.color === color) {
      // Add new files to existing ones, remove duplicates, and ensure there are no more than 5 files total
      const updatedFiles = Array.from(
        new Set([...filesWith1Color.files, ...newFiles])
      ).slice(0, 5);
      return { ...filesWith1Color, files: updatedFiles };
    }
    return filesWith1Color;
  });
};

// Create
export const createColorsWithFiles = (
  color: ColorType,
  existingColorsWithFiles: IColorsWithFiles[]
) => {
  const newFilesWith1Color = {
    color,
    files: [],
  };
  return [...existingColorsWithFiles, newFilesWith1Color];
};

// Remove object with color
export const removeColor = (
  colorsWithFiles: IColorsWithFiles[],
  color: ColorType
) => {
  return colorsWithFiles.filter(
    (filesWith1Color) => filesWith1Color.color !== color
  );
};

// Remove a 1 file from the array of files for 1 color
export const removeFiles = (
  colorsWithFiles: IColorsWithFiles[],
  color: ColorType,
  indexToRemove: number
): IColorsWithFiles[] => {
  return colorsWithFiles.map((filesWith1Color) => {
    if (filesWith1Color.color === color) {
      const newFiles = filesWith1Color.files.filter(
        (_, index) => index !== indexToRemove
      );
      return { ...filesWith1Color, files: newFiles };
    }
    return filesWith1Color;
  });
};

// Get unique colors
export const getExistingUniqueColors = (variants: IVariant[]) => {
  const set = new Set<ColorType>();
  if (variants && variants.length) {
    variants.forEach((variant: IVariant) => set.add(variant.color));
  }

  return [...set];
};
