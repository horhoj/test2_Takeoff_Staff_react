import { ContactListItemKeys, ContactListResponse } from '../types';
import { EntityListRequestOptions } from '../../types/commonTypes';
import { RequestError } from '../../store/types';

export type ContactListRequestOptions =
  EntityListRequestOptions<ContactListItemKeys>;

export interface ContactListState {
  isLoading: boolean;
  contactListResponse: ContactListResponse | null;
  requestOptions: ContactListRequestOptions;
  requestError: RequestError | null;
}

interface ContactListWorker<T, P> {
  type: T;
  payload: P;
}

export enum ContactListWorkerType {
  FETCH_DATA = 'contactList/fetchDataWorker',
  SORT = 'contactList/sortWorker',
  GO_TO_PAGE = 'contactList/goToPageWorker',
  SEARCH = 'contactList/searchWorker',
  CHANGE_PER_PAGE = 'contactList/changePerPageWorker',
  DELETE = 'contactList/deleteWorker',
}

export type ContactListFetchDataWorker = ContactListWorker<
  ContactListWorkerType.FETCH_DATA,
  null
>;

export type ContactListGotoPageWorker = ContactListWorker<
  ContactListWorkerType.GO_TO_PAGE,
  number
>;

export type ContactListSortWorker = ContactListWorker<
  ContactListWorkerType.SORT,
  ContactListItemKeys
>;

export type ContactListSearchWorker = ContactListWorker<
  ContactListWorkerType.SEARCH,
  string
>;
