import { unwrapResult } from '@reduxjs/toolkit';
import { AppDispatch } from '../../../redux/store';
import { handleCreateVariants } from '../../../redux/thunks/variants';
import { ICreateVariantsData, IVariant } from './types';

export const handleSubmitFormVariants = async (
  productId: string,
  dispatch: AppDispatch,
  setInitialValues: React.Dispatch<React.SetStateAction<ICreateVariantsData>>,
  values: ICreateVariantsData,
  navigate: any
) => {
  let data: any;
  data = await dispatch(
    handleCreateVariants({ productId, variants: values.variants })
  );

  // Get data from DB
  const variants: IVariant[] = unwrapResult(data);

  // Set initial values
  if (variants && variants.length) {
    setInitialValues({
      variants: values.variants,
    });

    navigate(`/product/${productId}/image`);
  }
};
