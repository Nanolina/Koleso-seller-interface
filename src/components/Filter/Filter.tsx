import { useCallback, useEffect } from 'react';
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('#filter-block')) {
        dispatch(toggleFilter());
      }
    };

    if (isFilterOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch, isFilterOpen]);

  return (
    <div className={styles.container}>
      <FaFilter
        size={20}
        color="var(--main)"
        onClick={handleToggleFilter}
        className={styles.filter}
      />

      {isFilterOpen && (
        <div className={styles.checkbox} id="filter-block">
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
