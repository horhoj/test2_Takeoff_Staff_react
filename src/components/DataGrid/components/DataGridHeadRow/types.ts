import { DataGridField } from '../../types';

export interface DataGridHeadRowProps {
  fieldList: DataGridField[];
  onColumnClick: (fieldName: string) => void;
  sortField: string;
  sortAsc: boolean;
  disabled: boolean;
}
