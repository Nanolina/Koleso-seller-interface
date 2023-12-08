import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import { TiPencil } from 'react-icons/ti';
import { ITableRowProps } from '../../types';
import { TableCell } from '../TableCell/TableCell';
import styles from './TableRow.module.css';

const iconSize = 20;

export const TableRow: React.FC<ITableRowProps> = React.memo(
  ({ row, rowIndex, onClick, isEditable = false, isDeletable = false }) => (
    <tr className={styles.tr} onClick={onClick}>
      <td className={styles.td}>{rowIndex + 1}</td>
      {row.map((cell, cellIndex) => (
        <TableCell
          key={`cell-${rowIndex}-${cellIndex}`}
          cell={cell}
          cellIndex={cellIndex}
        />
      ))}
      <td className={styles.itemsContainer}>
        {isDeletable && <RxCross1 size={iconSize} />}
        {isEditable && <TiPencil size={iconSize} />}
      </td>
    </tr>
  )
);
