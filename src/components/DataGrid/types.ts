export interface DataGridProps {
  fieldList: DataGridField[];
  rowList: DataGridRow[];
  numOffset: number;
  onColumnClick(fieldName: string): void;
  sortField: string;
  sortAsc: boolean;
  searchStr: string;
  disabled: boolean;
  actionPanelRenderFn(id: number): JSX.Element;
}

export interface DataGridField<T = string> {
  id: number;
  name: T;
  title: string;
}

export interface DataGridRow {
  id: number;
  [keys: string]: number | string | null | undefined;
}
