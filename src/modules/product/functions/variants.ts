import { v4 as uuidv4 } from 'uuid';
import { ColorType, IVariant } from '../types';

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
  const newVariant = { ...existingVariant, id: uuidv4() };
  return [...variants, newVariant];
};

// Remove
export const removeVariant = (variants: IVariant[], variantId: string) => {
  return variants.filter((variant) => variant.id !== variantId);
};

// Local storage
export const updateVariantsLocalStorage = (newVariants: any) => {
  const currentData = JSON.parse(localStorage.getItem('product') || '{}');
  currentData['variants'] = newVariants;
  localStorage.setItem('product', JSON.stringify(currentData));
};
