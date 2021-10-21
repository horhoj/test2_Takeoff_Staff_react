import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { logger } from '../../../utils/logger';
import { requestExecutor } from '../../../store/sagas';
import { Contact, ContactSchema } from '../types';
import { getErrorData } from '../../../store/helpers';
import { getPathByName } from '../../../router';
import { appActions } from '../../../store/app';
import {
  ContactFetchDataWorker,
  ContactNewWorker,
  ContactPatchDataWorker,
  ContactWorkerType,
} from './types';
import {
  getContactFetchDataRequestConfig,
  getContactPatchDataRequestConfig,
  getNewContactRequestConfig,
} from './requests';
import { contactActions } from './index';

export function* contactWatcher(): SagaIterator {
  yield takeEvery(ContactWorkerType.FETCH_DATA, fetchDataWorker);
  yield takeEvery(ContactWorkerType.PATCH_DATA, patchDataWorker);
  yield takeEvery(ContactWorkerType.NEW, newContactWorker);
}

export function* fetchDataWorker(action: ContactFetchDataWorker): SagaIterator {
  yield call(logger, 'fetchDataWorker');
  try {
    yield put(contactActions.setIsLoading(true));
    yield put(contactActions.setRequestError(null));
    const requestConfig: ReturnType<typeof getContactFetchDataRequestConfig> =
      yield call(getContactFetchDataRequestConfig, action.payload);

    const result: Contact = yield call(
      requestExecutor,
      requestConfig,
      ContactSchema,
    );

    yield put(contactActions.setContactResponse(result));
  } catch (e) {
    const errorData: ReturnType<typeof getErrorData> = yield call(
      getErrorData,
      e,
    );
    yield call(logger, 'categoryFetchDataWorker', errorData);
    yield put(contactActions.setRequestError(errorData));
  } finally {
    yield put(contactActions.setIsLoading(false));
  }
}

export function* patchDataWorker(action: ContactPatchDataWorker): SagaIterator {
  yield call(logger, 'patchDataWorker', action);
  try {
    yield put(contactActions.setIsLoading(true));
    yield put(contactActions.setRequestError(null));
    const requestConfig: ReturnType<typeof getContactPatchDataRequestConfig> =
      yield call(getContactPatchDataRequestConfig, action.payload);
    yield call(requestExecutor, requestConfig, null);
    const path: ReturnType<typeof getPathByName> = yield call(
      getPathByName,
      'contactList',
    );
    yield put(appActions.redirect(path));
  } catch (e) {
    const errorData: ReturnType<typeof getErrorData> = yield call(
      getErrorData,
      e,
    );
    yield call(logger, 'fetchDataWorker', errorData);
    yield put(contactActions.setRequestError(errorData));
  } finally {
    yield put(contactActions.setIsLoading(false));
  }
}

export function* newContactWorker(action: ContactNewWorker): SagaIterator {
  yield call(logger, 'newContactWorker', action);
  try {
    yield put(contactActions.setIsLoading(true));
    yield put(contactActions.setRequestError(null));
    const requestConfig: ReturnType<typeof getNewContactRequestConfig> =
      yield call(getNewContactRequestConfig, action.payload);
    yield call(requestExecutor, requestConfig, null);
    const path: ReturnType<typeof getPathByName> = yield call(
      getPathByName,
      'contactList',
    );
    yield put(appActions.redirect(path));
  } catch (e) {
    const errorData: ReturnType<typeof getErrorData> = yield call(
      getErrorData,
      e,
    );
    yield call(logger, 'fetchDataWorker', errorData);
    yield put(contactActions.setRequestError(errorData));
  } finally {
    yield put(contactActions.setIsLoading(false));
  }
}
