import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setValueProductCreationStrings } from '../../../redux/slices/productCreationStringsSlice';
import { IComposition } from '../../composition';
import { IProductCreationStringsState } from '../types';

export const useProductForm = () => {
  const dispatch = useDispatch();

  const [selectedCompositions, setSelectedCompositions] = useState<
    IComposition[]
  >([]);

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

  return {
    selectedCompositions,
    setSelectedCompositions,
    handleInputChange,
    handleSelectChange,
  };
};
