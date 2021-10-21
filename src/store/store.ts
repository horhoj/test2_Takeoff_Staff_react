import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { SagaIterator } from 'redux-saga';
import { all, AllEffect } from 'redux-saga/effects';

import { contactListReducer } from '../features/contactList/contactListReducer';
import { contactListWatcher } from '../features/contactList/contactListReducer/sagas';
import { contactReducer } from '../features/contact/contactReducer';
import { contactWatcher } from '../features/contact/contactReducer/sagas';
import { appReducer } from './app';
import { authReducer } from './auth';
import { authWatcher } from './auth/sagas';

const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

const middlewares = [sagaMiddleware];

export const store = configureStore({
  devTools: true,
  reducer: {
    app: appReducer,
    auth: authReducer,
    contactList: contactListReducer,
    contact: contactReducer,
  },
  middleware: [...middlewares],
});

export function* rootSaga(): Generator<AllEffect<SagaIterator<any>>> {
  yield all([authWatcher(), contactListWatcher(), contactWatcher()]);
}

sagaMiddleware.run(rootSaga);
