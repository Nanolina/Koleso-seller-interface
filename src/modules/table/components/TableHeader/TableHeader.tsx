import React from 'react';
import styles from './TableHeader.module.css';

export const TableHeader: React.FC<any> = React.memo(({ children }) => (
  <thead className={styles.container}>
    <tr>{children}</tr>
  </thead>
));
