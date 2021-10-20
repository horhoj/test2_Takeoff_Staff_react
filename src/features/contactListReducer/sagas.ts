import { call, put, takeEvery, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { logger } from '../../utils/logger';
import { getErrorData } from '../../store/helpers';
import { ContactListResponse, ContactListResponseSchema } from '../types';
import { requestExecutor } from '../../store/sagas';
import { ContactListWorkerType } from './types';
import { getContactListRequestConfig } from './requests';
import { contactListActions, contactListSelectors } from '.';

export function* contactListWatcher(): SagaIterator {
  yield takeEvery(ContactListWorkerType.FETCH_DATA, fetchDataWorker);
}

export function* fetchDataWorker(): SagaIterator {
  // yield call(logger, 'fetchDataWorker');
  try {
    yield put(contactListActions.setIsLoading(true));
    yield put(contactListActions.setRequestError(null));
    const requestOptions = yield select(contactListSelectors.getRequestOptions);

    const requestConfig: ReturnType<typeof getContactListRequestConfig> =
      yield call(getContactListRequestConfig, requestOptions);
    const result: ContactListResponse = yield call(
      requestExecutor,
      requestConfig,
      ContactListResponseSchema,
    );
    yield call(logger, 'CategoryList fetchDataWorker', result);
    yield put(contactListActions.setContactListResponse(result));
  } catch (e) {
    const errorData: ReturnType<typeof getErrorData> = yield call(
      getErrorData,
      e,
    );
    yield call(logger, 'CategoryList fetchDataWorker', errorData);
    yield put(contactListActions.setRequestError(errorData));
  } finally {
    yield put(contactListActions.setIsLoading(false));
  }
}
