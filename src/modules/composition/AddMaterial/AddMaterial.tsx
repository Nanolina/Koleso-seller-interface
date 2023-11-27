/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '../../../components/Select/Select';
import { compositions } from '../../../data';
import { IIdTitle } from '../../../types';
import { Button } from '../../../ui/Button/Button';
import { AddPercentage } from '../AddPercentage/AddPercentage';
import { IAddMaterialProps, IComposition } from '../types';
import styles from './AddMaterial.module.css';

/**
 * Component to add a material with its percentage in a composition.
 * Allows selecting a material and defining its percentage in a composition.
 */
export const AddMaterial: React.FC<IAddMaterialProps> = React.memo(
  ({
    materialId,
    setMaterialId,
    selectedCompositions,
    setSelectedCompositions,
  }) => {
    const { t } = useTranslation();

    // Local state to manage the title and percentage of the material
    const [materialTitle, setMaterialTitle] = useState<string>('');
    const [materialPercentage, setMaterialPercentage] = useState<number>(0);

    // Callback to handle material selection changes
    const handleChangeMaterial = useCallback((id: string) => {
      // Find the selected material from the compositions list
      const material: IIdTitle | undefined = compositions.find(
        (material) => material.id === id
      );

      if (!material) {
        return;
      }

      // Set the material ID and title if found
      setMaterialId(id);
      setMaterialTitle(material.title);
    }, []);

    // Callback to handle adding the selected material to the composition
    const handleChangeComposition = useCallback(() => {
      // Check if the material already exists in the composition
      const existingMaterial = selectedCompositions.find(
        (material: IComposition) => material.title === materialTitle
      );

      if (!materialTitle || !materialPercentage || existingMaterial) {
        return;
      }
      
      // Add the material to the composition if it's new and valid
      setSelectedCompositions((prevComposition: IComposition[]) => [
        ...prevComposition,
        { title: materialTitle, percentage: materialPercentage },
      ]);
    }, [selectedCompositions, materialTitle, materialPercentage]);

    return (
      <div className={styles.container}>
        <Select
          id="material"
          name="material"
          options={compositions}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            handleChangeMaterial(event.target.value)
          }
          value={materialId}
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
