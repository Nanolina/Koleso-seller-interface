export interface ITableProps {
  headers: string[];
  data: any;
}

export interface ITableHeaderProps {
  headers: string[];
}

export interface ITableRowProps {
  row: any[];
  rowIndex: number;
}

export interface ITableCellProps {
  cell: any;
  cellIndex: number;
}
