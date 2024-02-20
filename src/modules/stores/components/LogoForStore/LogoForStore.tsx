import React from 'react';
import { useTranslation } from 'react-i18next';
import { InputUploadLabel } from '../../../../components/InputUploadLabel/InputUploadLabel';
import { PhotoPreview } from '../../../photo/PhotoPreview/PhotoPreview';
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
              image={previewUrl}
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
