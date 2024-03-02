import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFilter } from 'react-icons/fa';
import { CheckboxWithLabel } from '../../../../components/CheckboxWithLabel/CheckboxWithLabel';
import { ITableProps } from '../../types';
import styles from './Table.module.css';

export const Table: React.FC<ITableProps> = React.memo(
  ({ showDeleted, setShowDeleted, children }) => {
    const { t } = useTranslation();

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

    return (
      <>
        <div className={styles.filter}>
          <FaFilter size={20} color="var(--main)" onClick={toggleFilter} />
          {isFilterOpen && (
            <CheckboxWithLabel
              label={t('stores.showDeleted')}
              checked={showDeleted || false}
              onChange={() => setShowDeleted(!showDeleted)}
              name="showDeleted"
            />
          )}
        </div>
        <table className={styles.table}>{children}</table>
      </>
    );
  }
);
