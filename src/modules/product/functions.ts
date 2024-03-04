import { IVariant } from './variantForm';

export const getValuesForVariants = (
  variants: IVariant[],
  type: keyof IVariant
) => {
  const arr: string[] = [];
  variants.forEach((variant) => {
    const value = variant[type];
    if (typeof value === 'string' || typeof value === 'number') {
      arr.push(value.toString());
    }
  });
  return arr.join(', ');
};

export const getFirstAvailableImage = (variants: IVariant[]) => {
  for (const variant of variants) {
    if (variant.images && variant.images.length > 0) {
      // Return the URL of the first image, if it exists
      return variant.images[0].url;
    }
  }
  return null;
};
