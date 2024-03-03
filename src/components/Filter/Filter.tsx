import { useCallback } from 'react';
import { FaFilter } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../redux/rootReducer';
import { toggleFilter } from '../../redux/slices/menuSlice';
import { AppDispatch } from '../../redux/store';
import { CheckboxWithLabel } from '../CheckboxWithLabel/CheckboxWithLabel';
import { IFilterProps } from '../types';
import styles from './Filter.module.css';

export const Filter: React.FC<IFilterProps> = ({ text, checked, onChange }) => {
  const dispatch = useDispatch<AppDispatch>();

  const isFilterOpen = useSelector(
    (state: IRootState) => state.menu.isFilterOpen
  );

  const handleToggleFilter = useCallback(() => {
    dispatch(toggleFilter());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <FaFilter size={20} color="var(--main)" onClick={handleToggleFilter} />

      {isFilterOpen && (
        <div className={styles.checkbox}>
          <CheckboxWithLabel
            label={text}
            checked={checked}
            onChange={onChange}
            name="showDeleted"
          />
        </div>
      )}
    </div>
  );
};
