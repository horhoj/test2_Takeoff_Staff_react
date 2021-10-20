import { ContactListItemKeys } from '../types';
import {
  ContactListFetchDataWorker,
  ContactListGotoPageWorker,
  ContactListSearchWorker,
  ContactListSortWorker,
  ContactListWorkerType,
} from './types';

export const fetchData = (): ContactListFetchDataWorker => ({
  type: ContactListWorkerType.FETCH_DATA,
  payload: null,
});

export const goToPageWorker = (page: number): ContactListGotoPageWorker => ({
  type: ContactListWorkerType.GO_TO_PAGE,
  payload: page,
});

export const sort = (
  fieldName: ContactListItemKeys,
): ContactListSortWorker => ({
  type: ContactListWorkerType.SORT,
  payload: fieldName,
});

export const search = (searchStr: string): ContactListSearchWorker => ({
  type: ContactListWorkerType.SEARCH,
  payload: searchStr,
});
