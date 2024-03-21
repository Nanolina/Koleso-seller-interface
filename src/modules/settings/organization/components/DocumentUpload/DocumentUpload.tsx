import React, { useCallback, useEffect } from 'react';
import { InputUploadLabel } from '../../../../../components/InputUploadLabel/InputUploadLabel';
import { ImagePreview } from '../../../../image/ImagePreview/ImagePreview';
import { IDocumentUploadProps } from '../../types';

export const DocumentUpload: React.FC<IDocumentUploadProps> = React.memo(
  ({ name, label, setFieldValue, preview, setPreview }) => {
    const onRemove = useCallback(() => {
      setFieldValue(`documents.${name}`, '');
      if (preview) URL.revokeObjectURL(preview);
      setPreview('');
    }, [preview, name, setFieldValue, setPreview]);

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          setFieldValue(`documents.${name}`, file);
          const fileUrl = URL.createObjectURL(file);
          setPreview(fileUrl);
        } else {
          onRemove();
        }
      },
      [name, setFieldValue, setPreview, onRemove]
    );

    // Clearing preview image URL to free up resources
    useEffect(() => {
      return () => {
        if (preview) {
          URL.revokeObjectURL(preview);
        }
      };
    }, [preview]);

    return (
      <>
        <InputUploadLabel
          label={label}
          id={name}
          name={name}
          onChange={handleChange}
          acceptFiles="image/*"
        />

        {preview && <ImagePreview image={preview} onRemove={onRemove} />}
      </>
    );
  }
);
