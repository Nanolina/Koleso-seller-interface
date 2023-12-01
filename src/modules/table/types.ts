export interface ITableProps {
  headers: string[];
  data: any;
  isEditable?: boolean;
  isDeletable?: boolean;
}

export interface ITableHeaderProps {
  headers: string[];
}

export interface ITableRowProps {
  row: any[];
  rowIndex: number;
  isEditable: boolean;
  isDeletable: boolean;
}

export interface ITableCellProps {
  cell: any;
  cellIndex: number;
}
