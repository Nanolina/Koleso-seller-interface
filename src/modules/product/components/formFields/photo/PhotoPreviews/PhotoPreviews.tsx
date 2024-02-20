import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removePhoto } from '../../../../../../redux/slices/productCreationSlice';
import { PhotoPreview } from '../../../../../photo/PhotoPreview/PhotoPreview';
import styles from './PhotoPreviews.module.css';
import { IColorWithImages } from '../../../../types';

export const PhotoPreviews: React.FC<IColorWithImages> = React.memo(
  ({ images, color }) => {
    const dispatch = useDispatch();

    const handleRemoveImage = useCallback(
      (index: number) => {
        // Revoke photo URL for memory cleanup
        const photoURL = images.find((_, photoIndex) => photoIndex === index);
        if (photoURL) {
          URL.revokeObjectURL(photoURL);
        }

        // Remove the photo from the Redux store
        dispatch(removePhoto({ color, index }));
      },
      [dispatch, images, color]
    );

    return (
      <div className={styles.container}>
        {images.map((image: string, index: number) => (
          <PhotoPreview
            key={`${image}-${index}`}
            image={image}
            onRemove={() => handleRemoveImage(index)}
          />
        ))}
      </div>
    );
  }
);
