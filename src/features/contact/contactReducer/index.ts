import { contactSlice } from './slice';
import * as selectors from './selectors';
import * as workers from './workers';

export const { actions: contactActions, reducer: contactReducer } =
  contactSlice;

export const contactSelectors = selectors;

export const contactWorkers = workers;
