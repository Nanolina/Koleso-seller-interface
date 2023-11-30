import { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';
import { addOrUpdateColorWithPhotos } from '../../../redux/slices/productCreationSlice';
import { IPhotosWith1Color } from '../types';

export const useFileHandler = (color: string) => {
  const dispatch = useDispatch();

  const colorsWithPhotos = useSelector(
    (state: RootState) => state.productCreation.colorsWithPhotos
  );
  const photos =
    colorsWithPhotos.find(
      (photosWith1Color: IPhotosWith1Color) => photosWith1Color.color === color
    )?.photos || [];

  const handleFileSelect = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      // Retrieve the files from the event target
      const files = event.target.files;

      if (files) {
        // Create object URLs for the selected files
        const newPhotos = Array.from(files)
          .slice(0, 5 - photos?.length)
          .map((file) => URL.createObjectURL(file));

        // Add ot update photos for the specific color
        dispatch(addOrUpdateColorWithPhotos({ color, photos: newPhotos }));
      }
    },
    [photos?.length, dispatch, color]
  );

  return { handleFileSelect };
};
