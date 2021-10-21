import { Contact } from '../types';
import { RequestError } from '../../../store/types';

export interface ContactState {
  isLoading: boolean;
  contactResponse: Contact | null;
  requestError: RequestError | null;
}

export enum ContactWorkerType {
  FETCH_DATA = 'contact/fetchDataWorker',
  PATCH_DATA = 'contact/patchDataWorker',
  NEW = 'contact/newWorker',
}

interface ContactWorker<T, P> {
  type: T;
  payload: P;
}
export type ContactFetchDataWorker = ContactWorker<
  ContactWorkerType.FETCH_DATA,
  number
>;

export type ContactPatchDataWorker = ContactWorker<
  ContactWorkerType.PATCH_DATA,
  Contact
>;

export type ContactNewWorker = ContactWorker<ContactWorkerType.NEW, Contact>;
