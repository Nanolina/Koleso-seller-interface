/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Select } from '../../../../../../components/Select/Select';
import { COMPOSITIONS } from '../../../../../../consts';
import { changeComposition } from '../../../../../../redux/slices/productsSlice';
import { AppDispatch } from '../../../../../../redux/store';
import { Button } from '../../../../../../ui/Button/Button';
import { IAddCompositionProps } from '../../../../types';
import { AddPercentage } from '../AddPercentage/AddPercentage';
import styles from './AddMaterial.module.css';

/**
 * Component to add a material with its percentage in a composition.
 * Allows selecting a material and defining its percentage in a composition.
 */
export const AddMaterial: React.FC<IAddCompositionProps> = React.memo(
  ({ values, setFieldValue }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();

    const [material, setMaterial] = useState<string>('');
    const [materialPercentage, setMaterialPercentage] = useState<number>(0);

    const handleChangeComposition = useCallback(() => {
      dispatch(changeComposition({ material, materialPercentage }));
    }, [dispatch, material, materialPercentage]);

    return (
      <div className={styles.container}>
        <Select
          id="material"
          name="material"
          options={COMPOSITIONS}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setMaterial(event.target.value)
          }
          value={material}
          firstText={t('products.form.composition.select')}
          translationType="products.form.composition"
          isHalfWidth
        />
        <AddPercentage
          materialPercentage={materialPercentage}
          setMaterialPercentage={setMaterialPercentage}
        />
        <Button
          text={t('add')}
          type="button"
          onClick={handleChangeComposition}
        />
      </div>
    );
  }
);
