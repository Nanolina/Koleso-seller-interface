import React, { useCallback } from 'react';
import { FinishedColor } from '../FinishedColor/FinishedColor';
import { IFinishedColorsProps } from '../types';
import styles from './FinishedColors.module.css';

export const FinishedColors: React.FC<IFinishedColorsProps> = React.memo(
  ({ selectedColors, setSelectedColors }) => {
    // Handler to remove a size based on its number
    const handleRemoveColor = useCallback(
      (value: string) => {
        setSelectedColors(
          selectedColors.filter((color: string) => color !== value)
        );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [selectedColors]
    );

    return (
      !!selectedColors.length && (
        <div className={styles.container}>
          {selectedColors.map((color: string) => (
            <FinishedColor
              key={color}
              color={color}
              handleRemoveColor={() => handleRemoveColor(color)}
            />
          ))}
        </div>
      )
    );
  }
);
