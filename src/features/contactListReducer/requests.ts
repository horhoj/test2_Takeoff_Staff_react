import { AxiosRequestConfig } from 'axios';
import { ContactListRequestOptions } from './types';

export const getContactListRequestConfig = (
  requestOptions: ContactListRequestOptions,
): AxiosRequestConfig => ({
  url: '/contacts',
  method: 'get',
  params: requestOptions,
});
