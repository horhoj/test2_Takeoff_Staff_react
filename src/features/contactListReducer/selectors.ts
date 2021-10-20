import { RequestError, RootState } from '../../store/types';
import { ContactListResponse } from '../types';
import { ContactListRequestOptions } from './types';

export const getContactListResponse = (
  state: RootState,
): ContactListResponse | null => state.contactList.contactListResponse;

export const getIsLoading = (state: RootState): boolean =>
  state.contactList.isLoading;

export const getRequestError = (state: RootState): RequestError | null =>
  state.contactList.requestError;

export const getRequestOptions = (
  state: RootState,
): ContactListRequestOptions => state.contactList.requestOptions;
