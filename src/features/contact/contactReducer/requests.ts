import { AxiosRequestConfig } from 'axios';
import { Contact } from '../types';

export const getContactFetchDataRequestConfig = (
  id: number,
): AxiosRequestConfig => ({
  url: `/contacts/${id}`,
  method: 'get',
});

export const getContactPatchDataRequestConfig = (
  data: Contact,
): AxiosRequestConfig => {
  const id = data.id;
  return {
    url: `/contacts/${id}`,
    method: 'put',
    data,
  };
};

export const getNewContactRequestConfig = (
  data: Contact,
): AxiosRequestConfig => ({
  url: '/contacts',
  method: 'post',
  data,
});
