import React, { useCallback } from 'react';
import { FinishedComposition } from '../FinishedComposition/FinishedComposition';
import { IComposition, IFinishedCompositionsProps } from '../types';

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
      !!selectedCompositions.length &&
      selectedCompositions.map((material: IComposition) => (
        <FinishedComposition
          material={material}
          handleRemoveComposition={handleRemoveComposition}
        />
      ))
    );
  });
