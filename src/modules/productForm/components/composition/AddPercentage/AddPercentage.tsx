import React, { useCallback } from 'react';
import { Input } from '../../../../../ui/Input/Input';
import styles from './AddPercentage.module.css';
import { IAddPercentageProps } from '../../../types';

/**
 * Component to add the percentage of a material in a composition.
 * Allows the user to input a percentage value for a selected material.
 */
export const AddPercentage: React.FC<IAddPercentageProps> = React.memo(
  ({ materialPercentage, setMaterialPercentage }) => {
    // Callback to handle changes in material percentage input
    const handleChangeMaterialPercentage = useCallback(
      (value: string) => {
        // Convert the input value to a number and update the state
        // Ensures that the percentage is a valid number and not greater than 100
        if (value === '') {
          setMaterialPercentage(0);
        } else {
          const parsedValue = parseInt(value);
          if (!isNaN(parsedValue) && parsedValue <= 100) {
            setMaterialPercentage(parsedValue);
          }
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [materialPercentage]
    );

    return (
      <div className={styles.container}>
        <Input
          type="number"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangeMaterialPercentage(event.target.value);
          }}
          value={materialPercentage}
          isSmallWidth
        />
        <span className={styles.percentage}>%</span>
      </div>
    );
  }
);
