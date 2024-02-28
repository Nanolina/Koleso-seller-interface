import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ImagePreview } from '../../../../image/ImagePreview/ImagePreview';
import { IImagePreviewsProps } from '../../types';
import { useImageHandler } from '../../useImageHandler';
import styles from './ImagePreviews.module.css';

export const ImagePreviews: React.FC<IImagePreviewsProps> = React.memo(
  ({ colorsWithFiles, setFieldValue, files, color }) => {
    // Get data from hooks
    const { handleRemoveFile } = useImageHandler();

    return (
      <div className={styles.container}>
        {files &&
          files.map((file: File, index: number) => (
            <ImagePreview
              key={uuidv4()}
              image={file}
              onRemove={() =>
                handleRemoveFile(colorsWithFiles, setFieldValue, color, index)
              }
            />
          ))}
      </div>
    );
  }
);
