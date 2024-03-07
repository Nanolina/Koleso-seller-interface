import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoCloseOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Loader } from '../../../../../components/Loader/Loader';
import { MessageBox } from '../../../../../components/MessageBox/MessageBox';
import { SelectLabel } from '../../../../../components/SelectLabel/SelectLabel';
import { IRootState } from '../../../../../redux/rootReducer';
import { InputUpload } from '../../../../../ui/InputUpload/InputUpload';
import { sortTranslatedEntities } from '../../../functions';
import { ColorType } from '../../../types';
import {
  createColorsWithImages,
  getExistingUniqueColors,
  removeColor,
} from '../../functions';
import { IImageUploadProps } from '../../types';
import { useImageHandler } from '../../useImageHandler';
import { ImagePreviews } from '../ImagePreviews/ImagePreviews';
import styles from './ImageUpload.module.css';

export const ImageUpload: React.FC<IImageUploadProps> = React.memo(
  ({ values, setFieldValue }) => {
    const { t } = useTranslation();

    // useState
    const [error, setError] = useState<string | null>(null);
    const [color, setColor] = useState<ColorType | string>('');
    const [sortedColors, setSortedColors] = useState<
      { name: string; value: string }[]
    >([]);

    // Redux
    const { items: variants, loading } = useSelector(
      (state: IRootState) => state.products.product.variants
    );

    // Handlers
    const { handleFileSelect } = useImageHandler();

    const handleCreateNewColorsWithImages = useCallback(
      (colorValue: ColorType) => {
        if (!colorValue) return;

        // There must not be 2 objects with the same color in the array
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
        setColor(colorValue);
        setFieldValue('colorsWithImages', newColorsWithImages);
      },
      [values.colorsWithImages, setFieldValue]
    );

    const handleRemoveColorWithImages = useCallback(
      (color: ColorType) => {
        const newColorsWithImages = removeColor(values.colorsWithImages, color);
        setFieldValue('colorsWithImages', newColorsWithImages);
      },
      [values.colorsWithImages, setFieldValue]
    );

    // Translate and sort colors
    useEffect(() => {
      const uniqueColors = getExistingUniqueColors(variants);
      const sortedTranslatedColors = sortTranslatedEntities(
        uniqueColors,
        'products.variants.color',
        t
      );

      setSortedColors(sortedTranslatedColors);
    }, [t, variants]);

    if (loading) return <Loader />;

    return (
      <div className={styles.container}>
        <SelectLabel
          id="color"
          name="color"
          label={t('products.variants.color.label')}
          options={sortedColors}
          value={color}
          onChange={handleCreateNewColorsWithImages}
          firstText={t('products.image.select')}
          extraText={t('products.image.upTo')}
          required
        />

        {values.colorsWithImages.map((imagesWith1Color) => (
          <div
            key={imagesWith1Color.color}
            className={styles.imagesWith1ColorContainer}
          >
            <h3 className={styles.title}>
              {t(`products.variants.color.${imagesWith1Color.color}`)}
            </h3>
            <ImagePreviews
              colorsWithImages={values.colorsWithImages}
              setFieldValue={setFieldValue}
              images={imagesWith1Color.images}
              color={imagesWith1Color.color}
            />
            {imagesWith1Color.images && imagesWith1Color.images.length < 5 && (
              <InputUpload
                onChange={handleFileSelect(
                  values.colorsWithImages,
                  setFieldValue,
                  imagesWith1Color,
                  setError,
                  t
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

        {error && <MessageBox errorMessage={error} />}
      </div>
    );
  }
);
