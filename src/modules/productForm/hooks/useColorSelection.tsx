import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { addOrUpdateColorWithPhotos } from '../../../redux/slices/productCreationSlice';
import { IColorSelectionReturn } from '../types';

export const useColorSelection = (parameters: any): IColorSelectionReturn => {
  const dispatch = useDispatch();

  const existingColors = useMemo(() => {
    const set = new Set<string>();
    parameters.forEach((parameter: any) => {
      if (parameter.color) {
        set.add(parameter.color);
      }
    });
    return [...set];
  }, [parameters]);

  const handleAddColor = useCallback(
    (value: string) => {
      dispatch(addOrUpdateColorWithPhotos({ color: value }));
    },
    [dispatch]
  );

  return { handleAddColor, existingColors };
};
