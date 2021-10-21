import { RequestError, RootState } from '../../../store/types';
import { Contact } from '../types';

export const getIsLoading = (state: RootState): boolean =>
  state.contact.isLoading;

export const getContactResponse = (state: RootState): Contact | null =>
  state.contact.contactResponse;

export const getRequestError = (state: RootState): RequestError | null =>
  state.contact.requestError;
