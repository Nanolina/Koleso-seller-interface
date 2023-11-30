import { ChangeEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addOrUpdateColorWithPhotos } from '../../../redux/slices/productCreationSlice';
import { IFileHandlerReturn } from '../types';

export const useFileHandler = (): IFileHandlerReturn => {
  const dispatch = useDispatch();

  const handleFileSelect = useCallback(
    (color: string, currentPhotos: string[]) =>
      (event: ChangeEvent<HTMLInputElement>) => {
        // Retrieve the files from the event target
        const files = event.target.files;

        if (files) {
          // Limit the number of selected files based on the existing ones
          const allowedFilesCount = 5 - currentPhotos.length;

          // Create object URLs for the selected files
          const newPhotos = Array.from(files)
            .slice(0, allowedFilesCount)
            .map((file) => URL.createObjectURL(file));

          // Add ot update photos for the specific color
          dispatch(addOrUpdateColorWithPhotos({ color, photos: newPhotos }));
        }
      },
    [dispatch]
  );

  return { handleFileSelect };
};
