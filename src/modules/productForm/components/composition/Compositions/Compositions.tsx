import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../../../redux/rootReducer';
import { removeComposition } from '../../../../../redux/slices/productCreationSlice';
import { IComposition } from '../../../types';
import { Composition } from '../Composition/Composition';
import styles from './Compositions.module.css';

/**
 * Component to display a list of compositions.
 * Allows for removal of compositions from the list.
 */
export const Compositions: React.FC = () => {
  const dispatch = useDispatch();

  const сompositions = useSelector(
    (state: IRootState) => state.productCreation.compositions
  );

  const handleRemoveComposition = useCallback(
    (title: string) => {
      dispatch(removeComposition(title));
    },
    [dispatch]
  );

  return (
    !!сompositions.length && (
      <div className={styles.container}>
        {сompositions.map((material: IComposition) => (
          <Composition
            key={material.title}
            material={material}
            handleRemoveComposition={handleRemoveComposition}
          />
        ))}
      </div>
    )
  );
};
