import { Contact } from '../types';
import {
  ContactFetchDataWorker,
  ContactNewWorker,
  ContactPatchDataWorker,
  ContactWorkerType,
} from './types';

export const fetchData = (id: number): ContactFetchDataWorker => ({
  type: ContactWorkerType.FETCH_DATA,
  payload: id,
});

export const patchData = (data: Contact): ContactPatchDataWorker => ({
  type: ContactWorkerType.PATCH_DATA,
  payload: data,
});

export const newContact = (data: Contact): ContactNewWorker => ({
  type: ContactWorkerType.NEW,
  payload: data,
});
