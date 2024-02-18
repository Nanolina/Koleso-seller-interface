import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../../../../redux/rootReducer';
import { AppDispatch } from '../../../../../../redux/store';
import { IComposition } from '../../../../types';
import { Composition } from '../Composition/Composition';
import styles from './Compositions.module.css';

/**
 * Component to display a list of compositions.
 * Allows for removal of compositions from the list.
 */
export const Compositions: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const composition = useSelector(
    (state: IRootState) => state.products.product.composition
  );

  const handleRemoveComposition = useCallback(
    (title: string) => {
      // dispatch(removeComposition(title));
    },
    [dispatch]
  );

  if (!composition?.length) {
    return null;
  }

  return (
    <div className={styles.container}>
      {composition?.map((material: IComposition) => (
        <Composition
          key={material.title}
          material={material}
          handleRemoveComposition={handleRemoveComposition}
        />
      ))}
    </div>
  );
};
