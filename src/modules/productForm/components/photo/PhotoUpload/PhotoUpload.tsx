import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { IoCloseOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { SelectLabel } from '../../../../../components/SelectLabel/SelectLabel';
import { RootState } from '../../../../../redux/rootReducer';
import { removePhotosWith1Color } from '../../../../../redux/slices/productCreationSlice';
import { useColorSelection } from '../../../hooks/useColorSelection';
import { FileInput } from '../FileInput/FileInput';
import { PhotoPreviews } from '../PhotoPreviews/PhotoPreviews';
import styles from './PhotoUpload.module.css';

export const PhotoUpload: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // Redux store
  const { colorsWithPhotos, parameters } = useSelector(
    (state: RootState) => state.productCreation
  );

  // Getting data from hooks
  const { handleAddColor, existingColors } = useColorSelection(parameters);

  const handleRemovePhotosWith1Color = useCallback(
    (color: string) => {
      dispatch(removePhotosWith1Color(color));
    },
    [dispatch]
  );

  return (
    <div className={styles.container}>
      <SelectLabel
        id="photo"
        name="photo"
        label={t('products.form.photo.label')}
        options={existingColors}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handleAddColor(event.target.value)
        }
        firstText={t('products.form.photo.select')}
        translationType="products.form.color"
        extraText={t('products.form.photo.upTo')}
        isFullWidth
        required
      />

      {colorsWithPhotos.map((photosWith1Color) => (
        <div
          key={photosWith1Color.color}
          className={styles.photosWith1ColorContainer}
        >
          <h4 className={styles.title}>
            {t(`products.form.color.${photosWith1Color.color}`)}
          </h4>
          <PhotoPreviews
            photos={photosWith1Color.photos}
            color={photosWith1Color.color}
          />
          {photosWith1Color.photos.length < 5 && (
            <FileInput photosWith1Color={photosWith1Color} />
          )}
          <IoCloseOutline
            color="var(--dark-gray)"
            onClick={() => handleRemovePhotosWith1Color(photosWith1Color.color)}
            className={styles.iconRemove}
          />
        </div>
      ))}
    </div>
  );
};
