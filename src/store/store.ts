import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { SagaIterator } from 'redux-saga';
import { all, AllEffect } from 'redux-saga/effects';

import { contactListReducer } from '../features/contactListReducer';
import { contactListWatcher } from '../features/contactListReducer/sagas';
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
  },
  middleware: [...middlewares],
});

export function* rootSaga(): Generator<AllEffect<SagaIterator<any>>> {
  yield all([authWatcher(), contactListWatcher()]);
}

sagaMiddleware.run(rootSaga);
