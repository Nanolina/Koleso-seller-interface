import React, { useCallback } from 'react';
import { IComposition, ICreateProductValuesProps } from '../../../types';
import { Composition } from '../Composition/Composition';
import styles from './Compositions.module.css';

/**
 * Component to display a list of compositions.
 * Allows for removal of compositions from the list.
 */
export const Compositions: React.FC<ICreateProductValuesProps> = React.memo(
  ({ values, setFieldValue }) => {
    const handleRemoveCompositionElem = useCallback(
      (title: string) => {
        const currentComposition = values.composition || [];
        // Filter the current composition by removing the element with the specified title
        const updatedComposition = currentComposition.filter(
          (material) => material.title !== title
        );

        // Update the composition in Formik
        setFieldValue('composition', updatedComposition);

        // Update the composition in localStorage
        const currentData = JSON.parse(localStorage.getItem('product') || '{}');
        currentData['composition'] = updatedComposition;
        localStorage.setItem('product', JSON.stringify(currentData));
      },
      [values.composition, setFieldValue]
    );

    return (
      <div className={styles.container}>
        {values.composition &&
          values.composition.map((material: IComposition) => (
            <Composition
              key={material.title}
              material={material}
              handleRemoveCompositionElem={handleRemoveCompositionElem}
            />
          ))}
      </div>
    );
  }
);
