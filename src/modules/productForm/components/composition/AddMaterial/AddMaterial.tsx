/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Select } from '../../../../../components/Select/Select';
import { COMPOSITIONS } from '../../../../../consts';
import { changeComposition } from '../../../../../redux/slices/productCreationSlice';
import { Button } from '../../../../../ui/Button/Button';
import { AddPercentage } from '../AddPercentage/AddPercentage';
import styles from './AddMaterial.module.css';

/**
 * Component to add a material with its percentage in a composition.
 * Allows selecting a material and defining its percentage in a composition.
 */
export const AddMaterial: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

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
      <Button text={t('add')} onClick={handleChangeComposition} />
    </div>
  );
};
