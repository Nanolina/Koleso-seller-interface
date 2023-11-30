import { ChangeEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addPhotos } from '../../../redux/slices/productCreationSlice';

export const useFileHandler = (selectedColor: string) => {
  const dispatch = useDispatch();

  const handleFileSelect = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files) {
        const newPhotos = Array.from(files).map((file) =>
          URL.createObjectURL(file)
        );
        dispatch(addPhotos({ color: selectedColor, photos: newPhotos }));
      }
    },
    [dispatch, selectedColor]
  );

  return { handleFileSelect };
};
