import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { IPhotoPreviewProps } from '../types';
import styles from './ImagePreview.module.css';

export const ImagePreview: React.FC<IPhotoPreviewProps> = React.memo(
  ({ image, onRemove }) => {
    return (
      <div className={styles.container}>
        <img src={image} alt="Uploaded" />
        <IoCloseOutline
          color="var(--dark-gray)"
          onClick={onRemove}
          className={styles.iconRemove}
        />
      </div>
    );
  }
);
