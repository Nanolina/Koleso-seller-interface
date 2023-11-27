/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '../../../components/Select/Select';
import { compositions } from '../../../data';
import { Button } from '../../../ui/Button/Button';
import { AddPercentage } from '../AddPercentage/AddPercentage';
import { IAddMaterialProps, IComposition } from '../types';
import styles from './AddMaterial.module.css';

/**
 * Component to add a material with its percentage in a composition.
 * Allows selecting a material and defining its percentage in a composition.
 */
export const AddMaterial: React.FC<IAddMaterialProps> = React.memo(
  ({ selectedCompositions, setSelectedCompositions }) => {
    const { t } = useTranslation();

    const [material, setMaterial] = useState<string>('');
    const [materialPercentage, setMaterialPercentage] = useState<number>(0);

    // Callback to handle adding the selected material to the composition
    const handleChangeComposition = useCallback(() => {
      // Check if the material already exists in the composition
      const existingMaterial = selectedCompositions.find(
        (selectedComposition: IComposition) =>
          selectedComposition.title === material
      );

      if (!material || !materialPercentage || existingMaterial) {
        return;
      }

      // Add the material to the composition if it's new and valid
      setSelectedCompositions((prevComposition: IComposition[]) => [
        ...prevComposition,
        { title: material, percentage: materialPercentage },
      ]);
    }, [selectedCompositions, material, materialPercentage]);

    return (
      <div className={styles.container}>
        <Select
          id="material"
          name="material"
          options={compositions}
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
  }
);
