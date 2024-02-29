import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ImagePreview } from '../../../../image/ImagePreview/ImagePreview';
import { IImagePreviewsProps } from '../../types';
import { useImageHandler } from '../../useImageHandler';
import styles from './ImagePreviews.module.css';

export const ImagePreviews: React.FC<IImagePreviewsProps> = React.memo(
  ({ colorsWithImages, setFieldValue, images, color }) => {
    // Get data from hooks
    const { handleRemoveImage } = useImageHandler();

    return (
      <div className={styles.container}>
        {images &&
          images.map((image: File, index: number) => (
            <ImagePreview
              key={uuidv4()}
              image={image}
              onRemove={() =>
                handleRemoveImage(colorsWithImages, setFieldValue, color, index)
              }
            />
          ))}
      </div>
    );
  }
);
