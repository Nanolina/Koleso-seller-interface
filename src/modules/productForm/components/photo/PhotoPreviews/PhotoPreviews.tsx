import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removePhotoAction } from '../../../../../redux/slices/productCreationSlice';
import { IPhotoPreviewsProps } from '../../../types';
import { PhotoPreview } from '../PhotoPreview/PhotoPreview';
import styles from './PhotoPreviews.module.css';

export const PhotoPreviews: React.FC<IPhotoPreviewsProps> = React.memo(
  ({ photos, selectedColor }) => {
    const dispatch = useDispatch();

    const removePhoto = useCallback(
      (index: number) => {
        // Revoke photo URL for memory cleanup
        const photoURL = photos.find((_, photoIndex) => photoIndex === index);
        if (photoURL) {
          URL.revokeObjectURL(photoURL);
        }

        // Remove the photo from the Redux store
        dispatch(removePhotoAction({ color: selectedColor, index }));
      },
      [dispatch, photos, selectedColor]
    );

    return (
      <div className={styles.container}>
        {photos.map((photo: string, index: number) => (
          <PhotoPreview
            key={`${photo}-${index}`}
            photo={photo}
            onRemove={() => removePhoto(index)}
          />
        ))}
      </div>
    );
  }
);
