import { ContactListFetchDataWorker, ContactListWorkerType } from './types';

export const fetchData = (): ContactListFetchDataWorker => ({
  type: ContactListWorkerType.FETCH_DATA,
  payload: null,
});
