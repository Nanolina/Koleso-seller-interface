import React, { useCallback } from 'react';
import { Input } from '../../../../../../ui/Input/Input';
import { IAddPercentageProps } from '../../../types';
import styles from './AddPercentage.module.css';

/**
 * Component to add the percentage of a material in a composition.
 * Allows the user to input a percentage value for a selected material.
 */
export const AddPercentage: React.FC<IAddPercentageProps> = React.memo(
  ({ materialPercentage, setMaterialPercentage }) => {
    // Callback to handle changes in material percentage input
    const handleChangeMaterialPercentage = useCallback(
      (value: string) => {
        let parsedValue = parseFloat(value) || 0;

        if (parsedValue > 100) {
          parsedValue = 100; // Max value
        }

        setMaterialPercentage(parsedValue);
      },
      [setMaterialPercentage]
    );

    return (
      <div className={styles.container}>
        <Input
          id="percentage"
          name="percentage"
          type="number"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangeMaterialPercentage(event.target.value);
          }}
          value={materialPercentage}
        />
        <span className={styles.percentage}>%</span>
      </div>
    );
  }
);
