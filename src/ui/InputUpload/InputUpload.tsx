import React from 'react';
import { useTranslation } from 'react-i18next';
import { IInputUploadProps } from '../types';
import styles from './InputUpload.module.css';

export const InputUpload: React.FC<IInputUploadProps> = React.memo(
  ({ id, name, required, value, onChange, acceptFiles, multiple }) => {
    const { t } = useTranslation();

    return (
      <label className={styles.uploadContainer}>
        + {t('upload')}
        <input
          id={id}
          name={name}
          type="file"
          value={value}
          onChange={onChange}
          accept={acceptFiles}
          required={required}
          className={styles.input}
          multiple={multiple}
        />
      </label>
    );
  }
);
