import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removePhoto } from '../../../../../redux/slices/productCreationSlice';
import { IPhotoPreviewsProps } from '../../../types';
import { PhotoPreview } from '../PhotoPreview/PhotoPreview';
import styles from './PhotoPreviews.module.css';

export const PhotoPreviews: React.FC<IPhotoPreviewsProps> = React.memo(
  ({ photos, color }) => {
    const dispatch = useDispatch();

    const handleRemovePhoto = useCallback(
      (index: number) => {
        // Revoke photo URL for memory cleanup
        const photoURL = photos.find((_, photoIndex) => photoIndex === index);
        if (photoURL) {
          URL.revokeObjectURL(photoURL);
        }

        // Remove the photo from the Redux store
        dispatch(removePhoto({ color, index }));
      },
      [dispatch, photos, color]
    );

    return (
      <div className={styles.container}>
        {photos.map((photo: string, index: number) => (
          <PhotoPreview
            key={`${photo}-${index}`}
            photo={photo}
            onRemove={() => handleRemovePhoto(index)}
          />
        ))}
      </div>
    );
  }
);
