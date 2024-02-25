import React from 'react';
import { ImagePreview } from '../../../../../image/ImagePreview/ImagePreview';
import { useImageHandler } from '../../../../hooks/useImageHandler';
import { IImagePreviewsProps } from '../../../../types';
import styles from './ImagePreviews.module.css';

export const ImagePreviews: React.FC<IImagePreviewsProps> = React.memo(
  ({ colorsWithImages, setFieldValue, images, color }) => {
    // Get data from hooks
    const { handleRemoveImage } = useImageHandler();

    return (
      <div className={styles.container}>
        {images.map((image) => (
          <ImagePreview
            key={`${color}-${image}`}
            image={image}
            onRemove={() =>
              handleRemoveImage(colorsWithImages, setFieldValue, color, image)
            }
          />
        ))}
      </div>
    );
  }
);
