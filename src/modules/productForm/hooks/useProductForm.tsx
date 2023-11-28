import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  resetValueProductCreationStrings,
  setValueProductCreationStrings,
} from '../../../redux/slices/productCreationStringsSlice';
import { IProductCreationStringsState } from '../types';

export const useProductForm = () => {
  const dispatch = useDispatch();

  const handleInputChange = useCallback(
    (key: keyof IProductCreationStringsState) => {
      return (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
          setValueProductCreationStrings({ key, value: event.target.value })
        );
      };
    },
    [dispatch]
  );

  const handleSelectChange = useCallback(
    (key: keyof IProductCreationStringsState) => {
      return (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(
          setValueProductCreationStrings({ key, value: event.target.value })
        );
      };
    },
    [dispatch]
  );

  const handleResetSelect = useCallback(
    (key: keyof IProductCreationStringsState) => {
      dispatch(resetValueProductCreationStrings({ key }));
    },
    [dispatch]
  );

  return {
    handleInputChange,
    handleSelectChange,
    handleResetSelect,
  };
};
