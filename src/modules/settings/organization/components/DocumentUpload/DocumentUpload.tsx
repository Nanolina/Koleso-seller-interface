import React, { useCallback } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { InputUploadLabel } from '../../../../../components/InputUploadLabel/InputUploadLabel';
import { isURL } from '../../../functions';
import { IDocumentUploadProps } from '../../types';
import styles from './DocumentUpload.module.css';

export const DocumentUpload: React.FC<IDocumentUploadProps> = React.memo(
  ({ name, label, setFieldValue, preview, setPreview }) => {
    const onRemove = useCallback(() => {
      setFieldValue(`documents.${name}`, '');
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
            {isURL(preview) ? (
              <Link
                className={styles.textPreview}
                to={preview}
                target="_blank"
                rel="noreferrer"
              >
                {preview}
              </Link>
            ) : (
              <span className={styles.textPreview}>{preview}</span>
            )}
            <IoCloseOutline color="var(--dark-gray)" onClick={onRemove} />
          </div>
        )}
      </>
    );
  }
);
