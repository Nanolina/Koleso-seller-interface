import React, { useCallback } from 'react';
import { FinishedComposition } from '../FinishedComposition/FinishedComposition';
import { IComposition, IFinishedCompositionsProps } from '../types';
import styles from './FinishedCompositions.module.css';

/**
 * Component to display a list of finished compositions.
 * Allows for removal of compositions from the list.
 */
export const FinishedCompositions: React.FC<IFinishedCompositionsProps> =
  React.memo(({ selectedCompositions, setSelectedCompositions }) => {
    // Handler to remove a composition based on its title
    const handleRemoveComposition = useCallback(
      (title: string) => {
        setSelectedCompositions(
          selectedCompositions.filter(
            (material: IComposition) => material.title !== title
          )
        );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [selectedCompositions]
    );

    return (
      !!selectedCompositions.length && (
        <div className={styles.container}>
          {selectedCompositions.map((material: IComposition) => (
            <FinishedComposition
              key={material.title}
              material={material}
              handleRemoveComposition={handleRemoveComposition}
            />
          ))}
        </div>
      )
    );
  });
