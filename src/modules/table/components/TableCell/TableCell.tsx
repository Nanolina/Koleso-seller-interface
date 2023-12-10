import React from 'react';
import { isImageUrl } from '../../functions';
import { ITableCellProps } from '../../types';
import styles from './TableCell.module.css';

export const TableCell: React.FC<ITableCellProps> = React.memo(({ cell, alt }) => (
  <td className={styles.td}>
    {isImageUrl(cell) ? (
      <img src={cell} alt={alt} className={styles.image} />
    ) : (
      cell
    )}
  </td>
));
