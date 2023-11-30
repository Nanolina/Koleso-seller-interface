import React from 'react';
import { IFileInputProps } from '../../../types';
import styles from './FileInput.module.css';

export const FileInput: React.FC<IFileInputProps> = React.memo(
  ({ onFileSelect }) => (
    <input
      type="file"
      onChange={onFileSelect}
      accept="image/*"
      multiple
      className={styles.input}
    />
  )
);
