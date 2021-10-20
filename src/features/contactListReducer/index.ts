import { contactListSlice } from './slice';
import * as selectors from './selectors';
import * as workers from './workers';

export const { actions: contactListActions, reducer: contactListReducer } =
  contactListSlice;

export const contactListSelectors = selectors;

export const contactListWorkers = workers;
