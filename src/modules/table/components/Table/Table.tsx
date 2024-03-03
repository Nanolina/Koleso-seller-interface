import React from 'react';
import { ITableProps } from '../../types';
import styles from './Table.module.css';

export const Table: React.FC<ITableProps> = React.memo(({ children }) => {
  return (
    <table className={styles.table} id="filter-block">
      {children}
    </table>
  );
});
