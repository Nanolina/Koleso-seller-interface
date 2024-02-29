import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '../../../../../../components/Select/Select';
import { COMPOSITIONS } from '../../../../../../consts';
import { Button } from '../../../../../../ui/Button/Button';
import { ICreateProductValuesProps } from '../../../types';
import { AddPercentage } from '../AddPercentage/AddPercentage';
import styles from './AddMaterial.module.css';

/**
 * Component to add a material with its percentage in a composition.
 * Allows selecting a material and defining its percentage in a composition.
 */
export const AddMaterial: React.FC<ICreateProductValuesProps> = React.memo(
  ({ values, setFieldValue }) => {
    const { t } = useTranslation();

    const [material, setMaterial] = useState<string>('');
    const [materialPercentage, setMaterialPercentage] = useState<number>(0);
    const [sortedMaterials, setSortedMaterials] = useState<
      { name: string; value: string }[]
    >([]);

    const addCompositionToValues = () => {
      const currentComposition = values.composition || [];

      if (currentComposition.some((comp) => comp.title === material)) {
        return;
      }

      const newComposition = [
        ...currentComposition,
        { title: material, percentage: materialPercentage },
      ];

      // Update the composition in Formik
      setFieldValue('composition', newComposition);

      // Update the composition in localStorage
      const currentData = JSON.parse(localStorage.getItem('product') || '{}');
      currentData['composition'] = newComposition;
      localStorage.setItem('product', JSON.stringify(currentData));
    };

    // Translate and sort materials
    useEffect(() => {
      const translatedMaterials = COMPOSITIONS.map((material) => ({
        name: t(`products.form.composition.${material}`),
        value: material,
      }));
      const sortedTranslatedMaterials = translatedMaterials.sort((a, b) =>
        a.name.localeCompare(b.name, 'default', { numeric: true })
      );
      setSortedMaterials(sortedTranslatedMaterials);
    }, [t]);

    return (
      <div className={styles.container}>
        <Select
          id="material"
          name="material"
          options={sortedMaterials}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setMaterial(event.target.value)
          }
          value={material}
          firstText={t('products.form.composition.select')}
          isHalfWidth
        />
        <AddPercentage
          materialPercentage={materialPercentage}
          setMaterialPercentage={setMaterialPercentage}
        />
        <Button
          text={t('add')}
          type="button"
          disabled={!material || !materialPercentage}
          onClick={addCompositionToValues}
        />
      </div>
    );
  }
);
