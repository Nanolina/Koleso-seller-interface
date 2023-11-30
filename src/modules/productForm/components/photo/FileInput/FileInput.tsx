import React from 'react';
import { useFileHandler } from '../../../hooks/useFileHandler';
import styles from './FileInput.module.css';
import { IPhotosWith1Color } from '../../../types';

export const FileInput: React.FC<{ photosWith1Color: IPhotosWith1Color }> =
  React.memo(({ photosWith1Color }) => {
    const { handleFileSelect } = useFileHandler(photosWith1Color.color);

    return (
      <input
        type="file"
        onChange={handleFileSelect}
        accept="image/*"
        multiple
        className={styles.input}
      />
    );
  });
