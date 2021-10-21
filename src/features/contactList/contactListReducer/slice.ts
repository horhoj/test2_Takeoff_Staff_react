import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_ENTITY_LIST_PER_PAGE } from '../../../config/app';
import { ContactListItemKeys, ContactListResponse } from '../types';
import { RequestError } from '../../../store/types';
import { ContactListRequestOptions, ContactListState } from './types';

const initialState: ContactListState = {
  isLoading: false,
  contactListResponse: null,
  requestError: null,
  requestOptions: {
    page: 1,
    per_page: DEFAULT_ENTITY_LIST_PER_PAGE,
    sort_field: 'id',
    search: '',
    sort_asc: 1,
  },
};

export const contactListSlice = createSlice({
  initialState,
  name: 'contactList',
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setContactListResponse: (
      state,
      action: PayloadAction<ContactListResponse | null>,
    ) => {
      state.contactListResponse = action.payload;
    },

    setRequestOptions: (
      state,
      action: PayloadAction<Partial<ContactListRequestOptions>>,
    ) => {
      state.requestOptions = { ...state.requestOptions, ...action.payload };
    },

    sort: (state, action: PayloadAction<ContactListItemKeys>) => {
      const { sort_field, sort_asc } = state.requestOptions;
      const newSortField = action.payload;
      state.requestOptions.page = 1;
      if (sort_field === newSortField) {
        state.requestOptions.sort_asc = sort_asc === 1 ? 0 : 1;
      } else {
        state.requestOptions.sort_field = newSortField;
        state.requestOptions.sort_asc = 1;
      }
    },

    setRequestError: (state, action: PayloadAction<RequestError | null>) => {
      state.requestError = action.payload;
    },

    clear: (state) => {
      state.requestError = null;
    },
  },
});
