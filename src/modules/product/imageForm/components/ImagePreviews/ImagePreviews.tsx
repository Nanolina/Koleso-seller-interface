import React from 'react';
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
          images.map((image: File | string, index: number) => {
            const imageUrl =
              image instanceof File ? URL.createObjectURL(image) : image;

            return (
              <ImagePreview
                key={`image-${index}`}
                image={imageUrl}
                onRemove={() =>
                  handleRemoveImage(
                    imageUrl,
                    index,
                    colorsWithImages,
                    setFieldValue,
                    color
                  )
                }
              />
            );
          })}
      </div>
    );
  }
);
