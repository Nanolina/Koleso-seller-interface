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
  children: any;
}

export interface IHeaderCellProps {
  extraText?: string;
  children?: any;
}
