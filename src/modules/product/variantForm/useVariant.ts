import { copyVariant, removeVariant, updateVariant } from './functions';
import { IVariant } from './types';

const useVariant = (variants: IVariant[], setFieldValue: any) => {
  const handleUpdateVariant = (
    variantId: string,
    key: string,
    value: string | number
  ) => {
    const newVariants = updateVariant(variants, variantId, key, value);
    setFieldValue('variants', newVariants);
  };

  const handleRemoveVariant = (variantId: string) => {
    const newVariants = removeVariant(variants, variantId);
    setFieldValue('variants', newVariants);
  };

  const handleCopyVariant = (variantId: string) => {
    const newVariants = copyVariant(variants, variantId);
    setFieldValue('variants', newVariants);
  };

  return {
    handleUpdateVariant,
    handleRemoveVariant,
    handleCopyVariant,
  };
};

export default useVariant;
