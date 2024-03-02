import React from 'react';
import { useTranslation } from 'react-i18next';
import { InputUploadLabel } from '../../../../components/InputUploadLabel/InputUploadLabel';
import { ImagePreview } from '../../../image/ImagePreview/ImagePreview';
import { ILogoProps } from '../../types';
import styles from './LogoForStore.module.css';

export const LogoForStore: React.FC<ILogoProps> = React.memo(
  ({ setFieldValue, previewUrl, setPreviewUrl }) => {
    const { t } = useTranslation();

    const handleLogoChange = (
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
          label={t('stores.table.logo')}
          id="image"
          name="image"
          onChange={(event) => handleLogoChange(event, setFieldValue)}
          acceptFiles="image/jpeg,image/png"
        />

        {previewUrl && (
          <div className={styles.logo}>
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
