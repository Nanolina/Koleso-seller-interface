import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setValueProductCreation } from '../../../redux/slices/productCreationSlice';
import { IProductCreationState } from '../../../types';
import { IComposition } from '../../composition';
import { ISizeOption } from '../../size';

export const useProductForm = () => {
  const dispatch = useDispatch();

  const [selectedCompositions, setSelectedCompositions] = useState<
    IComposition[]
  >([]);
  const [selectedSizeOptions, setSelectedSizeOptions] = useState<ISizeOption[]>(
    []
  );

  const handleInputChange = useCallback(
    (key: keyof IProductCreationState) =>
      (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setValueProductCreation({ key, value: event.target.value }));
      },
    [dispatch]
  );

  const handleSelectChange = useCallback(
    (key: keyof IProductCreationState) =>
      (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setValueProductCreation({ key, value: event.target.value }));
      },
    [dispatch]
  );

  return {
    selectedCompositions,
    setSelectedCompositions,
    selectedSizeOptions,
    setSelectedSizeOptions,
    handleInputChange,
    handleSelectChange,
  };
};
