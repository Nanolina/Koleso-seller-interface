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
