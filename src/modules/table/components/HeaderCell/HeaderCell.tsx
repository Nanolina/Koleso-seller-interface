import React from 'react';
import styles from './HeaderCell.module.css';

export const HeaderCell: React.FC<any> = React.memo(({ children }) => {
  return <th className={styles.container}>{children}</th>;
});
