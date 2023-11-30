import { useCallback, useMemo, useState } from 'react';
import { IParameter } from '../types';

export const useColorSelection = (parameters: IParameter[]) => {
  const [selectedColor, setSelectedColor] = useState<string>('');

  const existingColors = useMemo(() => {
    const set = new Set<string>();
    parameters.forEach((parameter) => {
      if (parameter.color) {
        set.add(parameter.color);
      }
    });
    return [...set];
  }, [parameters]);

  const handleColorChange = useCallback((value: string) => {
    setSelectedColor(value);
  }, []);

  return { selectedColor, handleColorChange, existingColors };
};
