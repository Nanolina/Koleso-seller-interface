import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoCloseOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Loader } from '../../../../../components/Loader/Loader';
import { SelectLabel } from '../../../../../components/SelectLabel/SelectLabel';
import { IRootState } from '../../../../../redux/rootReducer';
import { InputUpload } from '../../../../../ui/InputUpload/InputUpload';
import { ColorType } from '../../../types';
import {
  createColorsWithFiles,
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
    const [color, setColor] = useState<ColorType | string>('');
    const { handleFileSelect } = useImageHandler();

    const { variants, loading } = useSelector(
      (state: IRootState) => state.variants
    );

    const uniqueColors = getExistingUniqueColors(variants);

    const handleCreateNewColorsWithFiles = useCallback(
      (colorValue: ColorType) => {
        if (!colorValue) return;

        // There must not be 2 objects with the same color in the array
        const existingColorIndex = values.colorsWithFiles.findIndex(
          (filesWith1Color) => filesWith1Color.color === colorValue
        );
        if (existingColorIndex !== -1) {
          return;
        }

        const newColorsWithFiles = createColorsWithFiles(
          colorValue,
          values.colorsWithFiles
        );
        setColor(colorValue);
        setFieldValue('colorsWithFiles', newColorsWithFiles);
      },
      [values.colorsWithFiles, setFieldValue]
    );

    const handleRemoveColorWithFiles = useCallback(
      (color: ColorType) => {
        const newColorsWithFiles = removeColor(values.colorsWithFiles, color);
        setFieldValue('colorsWithFiles', newColorsWithFiles);
      },
      [values.colorsWithFiles, setFieldValue]
    );

    if (loading) return <Loader />;

    return (
      <div className={styles.container}>
        <SelectLabel
          id="color"
          name="color"
          label={t('products.form.color.label')}
          options={uniqueColors}
          value={color}
          onChange={handleCreateNewColorsWithFiles}
          firstText={t('products.form.image.select')}
          translationType="products.form.color"
          extraText={t('products.form.image.upTo')}
          required
        />

        {values.colorsWithFiles &&
          values.colorsWithFiles.map((filesWith1Color) => (
            <div
              key={filesWith1Color.color}
              className={styles.filesWith1ColorContainer}
            >
              <h3 className={styles.title}>
                {t(`products.form.color.${filesWith1Color.color}`)}
              </h3>
              <ImagePreviews
                colorsWithFiles={values.colorsWithFiles}
                setFieldValue={setFieldValue}
                files={filesWith1Color.files}
                color={filesWith1Color.color}
              />
              {filesWith1Color.files && filesWith1Color.files.length < 5 && (
                <InputUpload
                  onChange={handleFileSelect(
                    values.colorsWithFiles,
                    setFieldValue,
                    filesWith1Color
                  )}
                  acceptFiles="image/*"
                  multiple
                />
              )}
              <IoCloseOutline
                color="var(--dark-gray)"
                onClick={() =>
                  handleRemoveColorWithFiles(filesWith1Color.color)
                }
                className={styles.iconRemove}
              />
            </div>
          ))}
      </div>
    );
  }
);
