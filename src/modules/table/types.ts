export interface ITableRowProps {
  rowIndex: number;
  onClick?: any;
  children: any;
}

export interface ITableCellProps {
  cell: any;
  alt?: string;
}

export interface ITableProps {
  showDeleted?: boolean;
  setShowDeleted?: any;
  children: any;
}
