import React from 'react';
import { IHeaderCellProps } from '../../types';
import styles from './HeaderCell.module.css';

export const HeaderCell: React.FC<IHeaderCellProps> = React.memo(
  ({ extraText, children }) => {
    return (
      <th className={styles.container}>
        {children}
        {extraText && <div className={styles.extraText}>{extraText}</div>}
      </th>
    );
  }
);
