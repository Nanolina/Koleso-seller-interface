import { unwrapResult } from '@reduxjs/toolkit';
import { AppDispatch } from '../../../redux/store';
import { handleUpdateVariants } from '../../../redux/thunks/variants';
import { IUpdateVariantsData, IVariant } from './types';

export const handleSubmitFormVariants = async (
  productId: string,
  dispatch: AppDispatch,
  values: IUpdateVariantsData,
  navigate: any
) => {
  let data: any;
  data = await dispatch(
    handleUpdateVariants({ productId, variants: values.variants })
  );

  // Get data from DB
  const variants: IVariant[] = unwrapResult(data);

  if (variants) navigate(`/product/${productId}/image`);
};
