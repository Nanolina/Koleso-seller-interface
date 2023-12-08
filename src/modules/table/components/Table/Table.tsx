import React from 'react';
import { FaFilter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ITableProps } from '../../types';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableRow } from '../TableRow/TableRow';
import styles from './Table.module.css';

export const Table: React.FC<ITableProps> = React.memo(
  ({ headers, data, isEditable = false, isDeletable = false }) => {
    const navigate = useNavigate();

    const handleOrderDetails = (orderNumber: string) => {
      navigate(`/order/${orderNumber}`);
    };

    return (
      <>
        <div className={styles.filterIcon}>
          <FaFilter size={20} />
        </div>

        <table className={styles.table}>
          <TableHeader headers={headers} />
          <tbody>
            {data.map((row: any, rowIndex: number) => (
              <TableRow
                key={`row-${rowIndex}`}
                row={row}
                rowIndex={rowIndex}
                isEditable={isEditable}
                isDeletable={isDeletable}
                onClick={() => handleOrderDetails(row[1])}
              />
            ))}
          </tbody>
        </table>
      </>
    );
  }
);
