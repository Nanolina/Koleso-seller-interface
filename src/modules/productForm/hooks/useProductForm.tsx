import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  resetValueProductCreationStrings,
  setValueProductCreationStrings,
} from '../../../redux/slices/productCreationStringsSlice';
import { IProductCreationStringsState, IProductFormReturn } from '../types';

export const useProductForm = (): IProductFormReturn => {
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (key: keyof IProductCreationStringsState) => {
      return (
        event: React.ChangeEvent<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
      ) => {
        let value = event.target.value;

        // The seller can enter the price with 1 dot, no letters
        if (key === 'price' || key === 'oldPrice') {
          value = value.replace(/[^0-9.]/g, '');

          if (value.split('.').length > 2) {
            return;
          }
        }

        dispatch(setValueProductCreationStrings({ key, value }));
      };
    },
    [dispatch]
  );

  const handleReset = useCallback(
    (key: keyof IProductCreationStringsState) => {
      dispatch(resetValueProductCreationStrings({ key }));
    },
    [dispatch]
  );

  return {
    handleChange,
    handleReset,
  };
};
