import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { IPhotoPreviewProps } from '../../../types';
import styles from './PhotoPreview.module.css';

export const PhotoPreview: React.FC<IPhotoPreviewProps> = React.memo(
  ({ photo, onRemove }) => {
    return (
      <div className={styles.container}>
        <img src={photo} alt="Uploaded" />
        <IoCloseOutline
          color="var(--dark-gray)"
          onClick={onRemove}
          className={styles.iconRemove}
        />
      </div>
    );
  }
);
