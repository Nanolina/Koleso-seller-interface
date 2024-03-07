import { TFunction } from 'i18next';
import { v4 as uuidv4 } from 'uuid';
import { COLORS } from '../../../consts';
import { ColorType } from '../types';
import { IVariant } from './types';

// Update
export const updateVariant = (
  variants: IVariant[],
  variantId: string,
  key: string,
  value: string | number
) => {
  return variants.map((variant) =>
    variant.id === variantId ? { ...variant, [key]: value } : variant
  );
};

// Create
export const createNewVariant = (
  colorValue: ColorType,
  existingVariants: IVariant[]
) => {
  const newVariant = {
    id: uuidv4(),
    color: colorValue,
    quantity: 1,
    size: undefined,
    priceWithoutDiscount: 0,
    finalPrice: 0,
    articleSupplier: '',
  };
  return [...existingVariants, newVariant];
};

// Copy
export const copyVariant = (variants: IVariant[], variantId: string) => {
  const existingVariant = variants.find((variant) => variant.id === variantId);
  if (!existingVariant) {
    return variants;
  }
  const newVariant = { ...existingVariant, id: uuidv4(), articleKoleso: '' };
  return [...variants, newVariant];
};

// Remove
export const removeVariant = (variants: IVariant[], variantId: string) => {
  return variants.filter((variant) => variant.id !== variantId);
};

// Sort translated colors
export const sortTranslatedColors = (
  t: TFunction<'translation', undefined>
): { name: string; value: string }[] => {
  return COLORS.map((color) => ({
    name: t(`products.form.color.${color}`),
    value: color,
  })).sort((a, b) => a.name.localeCompare(b.name));
};
