import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../types';
import { RequestError } from '../../../store/types';
import { ContactState } from './types';

const initialState: ContactState = {
  isLoading: false,
  contactResponse: null,
  requestError: null,
};

export const contactSlice = createSlice({
  initialState,
  name: 'contact',
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setContactResponse: (state, action: PayloadAction<Contact | null>) => {
      state.contactResponse = action.payload;
    },

    setRequestError: (state, action: PayloadAction<RequestError | null>) => {
      state.requestError = action.payload;
    },

    clear: (state) => {
      state.requestError = null;
      state.contactResponse = null;
    },
  },
});
