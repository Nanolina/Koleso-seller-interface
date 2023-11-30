import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { SelectLabel } from '../../../../../components/SelectLabel/SelectLabel';
import { RootState } from '../../../../../redux/rootReducer';
import { addPhotos } from '../../../../../redux/slices/productCreationSlice';
import { PhotoPreviews } from '../PhotoPreviews/PhotoPreviews';
import styles from './PhotoUpload.module.css';

export const PhotoUpload: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // State to keep track of the selected color
  const [selectedColor, setSelectedColor] = useState<string>('');

  // states from Redux store
  const { colorfulPhotos, parameters } = useSelector(
    (state: RootState) => state.productCreation
  );

  // Find photos that have already been uploaded
  const photos = useMemo(
    () =>
      colorfulPhotos.find((item) => {
        return item.color === selectedColor;
      })?.photos || [],
    [colorfulPhotos, selectedColor]
  );

  // Collecting existing colors from parameters
  const existingColors = useMemo(() => {
    const set = new Set<string>();

    parameters.forEach((parameter) => {
      if (parameter.color) {
        set.add(parameter.color);
      }
    });

    return [...set];
  }, [parameters]);

  // Handler for color change
  const handleColorChange = useCallback((value: string) => {
    setSelectedColor(value);
  }, []);

  // Handler for file selection
  const handleFileSelect = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files) {
        // Creating object URLs for the selected files
        const newPhotos = Array.from(files)
          .slice(0, 5 - photos.length)
          .map((file) => URL.createObjectURL(file));

        // Add new photos
        dispatch(addPhotos({ color: selectedColor, photos: newPhotos }));
      }
    },
    [dispatch, selectedColor, photos.length]
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

          {photos.length < 5 && (
            <input
              type="file"
              onChange={handleFileSelect}
              accept="image/*"
              multiple
              className={styles.fileInput}
            />
          )}
        </>
      )}
    </div>
  );
};
