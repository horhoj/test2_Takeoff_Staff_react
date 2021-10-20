import { DataGridField, DataGridRow } from '../../types';

export interface DataGridRowProps {
  fieldList: DataGridField[];
  row: DataGridRow;
  num: number;
  searchStr: string;
}
