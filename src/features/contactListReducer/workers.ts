import { ContactListItemKeys } from '../types';
import {
  ContactListChangePerPage,
  ContactListDeleteWorker,
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

export const deleteContact = (id: number): ContactListDeleteWorker => ({
  type: ContactListWorkerType.DELETE,
  payload: id,
});

export const changePerPage = (perPage: number): ContactListChangePerPage => ({
  type: ContactListWorkerType.CHANGE_PER_PAGE,
  payload: perPage,
});
