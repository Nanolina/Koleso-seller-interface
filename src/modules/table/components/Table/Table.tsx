import React from 'react';
import { FaFilter } from 'react-icons/fa';
import { ITableProps } from '../../types';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableRow } from '../TableRow/TableRow';
import styles from './Table.module.css';

export const Table: React.FC<ITableProps> = React.memo(({ headers, data }) => (
  <>
    <div className={styles.filterIcon}>
      <FaFilter size={20} />
    </div>

    <table className={styles.table}>
      <TableHeader headers={headers} />
      <tbody>
        {data.map((row: any, rowIndex: number) => (
          <TableRow key={`row-${rowIndex}`} row={row} rowIndex={rowIndex} />
        ))}
      </tbody>
    </table>
  </>
));
