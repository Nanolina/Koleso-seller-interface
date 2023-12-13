import React from 'react';
import styles from './Table.module.css';

export const Table: React.FC<any> = React.memo(({ children }) => {
  return (
    <>
      {/* <Filter /> */}
      <table className={styles.table}>{children}</table>
    </>
  );
});
