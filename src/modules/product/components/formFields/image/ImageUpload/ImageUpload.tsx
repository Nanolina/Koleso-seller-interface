import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoCloseOutline } from 'react-icons/io5';
import { SelectLabel } from '../../../../../../components/SelectLabel/SelectLabel';
import { InputUpload } from '../../../../../../ui/InputUpload/InputUpload';
import {
  createColorsWithImages,
  getExistingUniqueColors,
  removeColor,
  updateColorsWithImagesLocalStorage,
} from '../../../../functions';
import { useImageHandler } from '../../../../hooks/useImageHandler';
import { ColorType, ICreateProductValuesProps } from '../../../../types';
import { ImagePreviews } from '../ImagePreviews/ImagePreviews';
import styles from './ImageUpload.module.css';

export const ImageUpload: React.FC<ICreateProductValuesProps> = React.memo(
  ({ values, setFieldValue }) => {
    const { t } = useTranslation();

    const [color, setColor] = useState<ColorType | string>('');

    // Get data from hooks
    const { handleFileSelect } = useImageHandler();

    const uniqueColors = getExistingUniqueColors();

    const handleCreateNewColorsWithImages = (colorValue: ColorType) => {
      if (!colorValue) return;
      setColor(colorValue);
      const existingColorIndex = values.colorsWithImages.findIndex(
        (imagesWith1Color) => imagesWith1Color.color === colorValue
      );
      if (existingColorIndex !== -1) {
        return;
      }
      const newColorsWithImages = createColorsWithImages(
        colorValue,
        values.colorsWithImages
      );
      setFieldValue('colorsWithImages', newColorsWithImages);
      updateColorsWithImagesLocalStorage(newColorsWithImages);
    };

    const handleRemoveColorWithImages = (color: ColorType) => {
      const newColorsWithImages = removeColor(values.colorsWithImages, color);
      setFieldValue('colorsWithImages', newColorsWithImages);
      updateColorsWithImagesLocalStorage(newColorsWithImages);
    };

    console.log('values.colorsWithImages', values.colorsWithImages);
    return (
      <div className={styles.container}>
        <SelectLabel
          id="color"
          name="color"
          label={t('products.form.color.label')}
          options={uniqueColors}
          value={color}
          onChange={handleCreateNewColorsWithImages}
          firstText={t('products.form.image.select')}
          translationType="products.form.color"
          extraText={t('products.form.image.upTo')}
          required
        />

        {values.colorsWithImages.map((imagesWith1Color) => (
          <div
            key={imagesWith1Color.color}
            className={styles.imagesWith1ColorContainer}
          >
            <h3 className={styles.title}>
              {t(`products.form.color.${imagesWith1Color.color}`)}
            </h3>
            <ImagePreviews
              colorsWithImages={values.colorsWithImages}
              setFieldValue={setFieldValue}
              images={imagesWith1Color.images}
              color={imagesWith1Color.color}
            />

            {imagesWith1Color.images.length < 5 && (
              <InputUpload
                onChange={handleFileSelect(
                  values.colorsWithImages,
                  setFieldValue,
                  imagesWith1Color
                )}
                acceptFiles="image/*"
                multiple
              />
            )}

            <IoCloseOutline
              color="var(--dark-gray)"
              onClick={() =>
                handleRemoveColorWithImages(imagesWith1Color.color)
              }
              className={styles.iconRemove}
            />
          </div>
        ))}
      </div>
    );
  }
);
