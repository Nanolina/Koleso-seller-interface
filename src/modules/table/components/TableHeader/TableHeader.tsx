import React from 'react';
import { ITableHeaderProps } from '../../types';
import styles from './TableHeader.module.css';

export const TableHeader: React.FC<ITableHeaderProps> = React.memo(
  ({ headers }) => (
    <thead className={styles.thead}>
      <tr>
        <th className={styles.th}>№</th>
        {headers.map((header, index) => (
          <th key={`header-${index}`} className={styles.th}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  )
);
