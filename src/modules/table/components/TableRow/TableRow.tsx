import React from 'react';
import { ITableRowProps } from '../../types';
import styles from './TableRow.module.css';

export const TableRow: React.FC<ITableRowProps> = React.memo(
  ({ rowIndex, onClick, children }) => (
    <tr className={styles.tr} onClick={onClick}>
      <td className={styles.td}>{rowIndex + 1}</td>
      {children}
    </tr>
  )
);
