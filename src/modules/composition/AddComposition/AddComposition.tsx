import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Label } from '../../../ui/Label/Label';
import { AddMaterial } from '../AddMaterial/AddMaterial';
import { FinishedCompositions } from '../FinishedCompositions/FinishedCompositions';
import { IAddCompositionProps } from '../types';
import styles from './AddComposition.module.css';

/**
 * Component for adding new compositions.
 * Includes a material selection and setup for adding a new composition.
 */
export const AddComposition: React.FC<IAddCompositionProps> = React.memo(
  ({ selectedCompositions, setSelectedCompositions }) => {
    const { t } = useTranslation();

    const [materialId, setMaterialId] = useState<string>('');

    return (
      <>
        <div className={styles.container}>
          <Label id="material" text={t('products.form.composition.label')} />
          <AddMaterial
            materialId={materialId}
            setMaterialId={setMaterialId}
            selectedCompositions={selectedCompositions}
            setSelectedCompositions={setSelectedCompositions}
          />
        </div>
        <FinishedCompositions
          selectedCompositions={selectedCompositions}
          setSelectedCompositions={setSelectedCompositions}
        />
      </>
    );
  }
);
