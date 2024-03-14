import React, { useCallback } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { InputUploadLabel } from '../../../../../components/InputUploadLabel/InputUploadLabel';
import { IDocumentUploadProps } from '../../types';
import styles from './DocumentUpload.module.css';

export const DocumentUpload: React.FC<IDocumentUploadProps> = React.memo(
  ({ name, label, setFieldValue, preview, setPreview }) => {
    const onRemove = useCallback(() => {
      setFieldValue(name, null);
      setPreview(null);
    }, [name, setFieldValue, setPreview]);

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          setFieldValue(`documents.${name}`, file);
          setPreview(file.name);
        } else {
          onRemove();
        }
      },
      [name, setFieldValue, setPreview, onRemove]
    );

    return (
      <>
        <InputUploadLabel
          label={label}
          id={name}
          name={name}
          onChange={handleChange}
          acceptFiles="image/jpeg,image/png,.pdf,.doc,.docx"
        />

        {preview && (
          <div className={styles.preview}>
            {preview}
            <IoCloseOutline color="var(--dark-gray)" onClick={onRemove} />
          </div>
        )}
      </>
    );
  }
);
