import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { SelectLabel } from '../../../../../components/SelectLabel/SelectLabel';
import { RootState } from '../../../../../redux/rootReducer';
import { useColorSelection } from '../../../hooks/useColorSelection';
import { useFileHandler } from '../../../hooks/useFileHandler';
import { FileInput } from '../FileInput/FileInput';
import { PhotoPreviews } from '../PhotoPreviews/PhotoPreviews';
import styles from './PhotoUpload.module.css';

export const PhotoUpload: React.FC = () => {
  const { t } = useTranslation();

  // Redux store
  const { colorfulPhotos, parameters } = useSelector(
    (state: RootState) => state.productCreation
  );

  // Getting data from hooks
  const { selectedColor, handleColorChange, existingColors } =
    useColorSelection(parameters);
  const { handleFileSelect } = useFileHandler(selectedColor);

  // Find photos that have already been uploaded for the current color
  const photos = useMemo(
    () =>
      colorfulPhotos.find((item) => item.color === selectedColor)?.photos || [],
    [colorfulPhotos, selectedColor]
  );

  return (
    <div className={styles.container}>
      <SelectLabel
        id="photo"
        name="photo"
        label={t('products.form.photo.label')}
        options={existingColors}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handleColorChange(event.target.value)
        }
        firstText={t('products.form.photo.select')}
        translationType="products.form.color"
        required
      />

      {selectedColor && (
        <>
          <PhotoPreviews photos={photos} selectedColor={selectedColor} />
          {photos.length < 5 && <FileInput onFileSelect={handleFileSelect} />}
        </>
      )}
    </div>
  );
};
