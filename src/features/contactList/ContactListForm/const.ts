import { DataGridField } from '../../../components/DataGrid/types';
import { ContactListItemKeys } from '../types';

export const FIELD_LIST: DataGridField<ContactListItemKeys>[] = [
  { id: 2, name: 'first_name', title: 'Имя' },
  { id: 3, name: 'last_name', title: 'Фамилия' },
  { id: 4, name: 'telephone', title: 'Телефон' },
  { id: 5, name: 'address', title: 'Адрес' },
  { id: 1, name: 'id', title: 'ИД' },
];
