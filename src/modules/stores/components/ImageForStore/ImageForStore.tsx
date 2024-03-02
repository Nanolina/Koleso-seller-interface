import React from 'react';
import { useTranslation } from 'react-i18next';
import { InputUploadLabel } from '../../../../components/InputUploadLabel/InputUploadLabel';
import { ImagePreview } from '../../../image/ImagePreview/ImagePreview';
import { IImageProps } from '../../types';
import styles from './ImageForStore.module.css';

export const ImageForStore: React.FC<IImageProps> = React.memo(
  ({ setFieldValue, previewUrl, setPreviewUrl }) => {
    const { t } = useTranslation();

    const handleImageChange = (
      event: React.ChangeEvent<HTMLInputElement>,
      setFieldValue: (
        field: string,
        value: any,
        shouldValidate?: boolean
      ) => void
    ) => {
      const { files } = event.target;
      if (files && files.length) {
        const file = files[0];
        setFieldValue('image', file);

        const fileUrl = URL.createObjectURL(file);
        setPreviewUrl(fileUrl);
      } else {
        setFieldValue('image', null);
        if (previewUrl) {
          URL.revokeObjectURL(previewUrl);
          setPreviewUrl(null);
        }
      }
    };

    return (
      <>
        <InputUploadLabel
          label={t('stores.table.image')}
          id="image"
          name="image"
          onChange={(event) => handleImageChange(event, setFieldValue)}
          acceptFiles="image/jpeg,image/png"
        />

        {previewUrl && (
          <div className={styles.image}>
            <ImagePreview
              image={previewUrl}
              onRemove={() => {
                setFieldValue('image', null);
                URL.revokeObjectURL(previewUrl);
                setPreviewUrl(null);
              }}
            />
          </div>
        )}
      </>
    );
  }
);
