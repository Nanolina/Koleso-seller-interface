import React from 'react';
import { isImageUrl } from '../../functions';
import { ITableCellProps } from '../../types';
import styles from './TableCell.module.css';

export const TableCell: React.FC<ITableCellProps> = React.memo(
  ({ cell, cellIndex }) => (
    <td className={styles.td}>
      {isImageUrl(cell) ? (
        <img src={cell} alt={`Product ${cellIndex}`} className={styles.image} />
      ) : (
        cell
      )}
    </td>
  )
);
