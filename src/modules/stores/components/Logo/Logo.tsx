import React from 'react';
import { useTranslation } from 'react-i18next';
import { InputUploadLabel } from '../../../../components/InputUploadLabel/InputUploadLabel';
import { PhotoPreview } from '../../../photo';
import { ILogoProps } from '../../types';
import styles from './Logo.module.css';

export const Logo: React.FC<ILogoProps> = React.memo(
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
        setFieldValue('logo', file);

        const fileUrl = URL.createObjectURL(file);
        setPreviewUrl(fileUrl);
      } else {
        setFieldValue('logo', null);
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
          id="logo"
          name="logo"
          onChange={(event) => handleLogoChange(event, setFieldValue)}
          acceptFiles="image/jpeg,image/png"
        />

        {previewUrl && (
          <div className={styles.logo}>
            <PhotoPreview
              photo={previewUrl}
              onRemove={() => {
                setFieldValue('logo', null);
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
