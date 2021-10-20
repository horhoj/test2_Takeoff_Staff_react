import { call, put, takeEvery, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { logger } from '../../utils/logger';
import { getErrorData } from '../../store/helpers';
import { ContactListResponse, ContactListResponseSchema } from '../types';
import { requestExecutor } from '../../store/sagas';
import {
  ContactListDeleteWorker,
  ContactListGotoPageWorker,
  ContactListSearchWorker,
  ContactListSortWorker,
  ContactListWorkerType,
} from './types';
import {
  getContactListRequestConfig,
  getDeleteCategoryRequestConfig,
} from './requests';
import { contactListActions, contactListSelectors } from '.';

export function* contactListWatcher(): SagaIterator {
  yield takeEvery(ContactListWorkerType.FETCH_DATA, fetchDataWorker);
  yield takeEvery(ContactListWorkerType.GO_TO_PAGE, goToPageWorker);
  yield takeEvery(ContactListWorkerType.SORT, sortWorker);
  yield takeEvery(ContactListWorkerType.SEARCH, searchWorker);
  yield takeEvery(ContactListWorkerType.DELETE, deleteContactWorker);
}

export function* fetchDataWorker(): SagaIterator {
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

export function* goToPageWorker(
  action: ContactListGotoPageWorker,
): SagaIterator {
  yield put(contactListActions.setRequestOptions({ page: action.payload }));
  yield call(fetchDataWorker);
}

export function* sortWorker(action: ContactListSortWorker): SagaIterator {
  yield put(contactListActions.sort(action.payload));
  yield call(fetchDataWorker);
}

export function* searchWorker(action: ContactListSearchWorker): SagaIterator {
  yield call(logger, 'searchWorker', action.payload);
  yield put(
    contactListActions.setRequestOptions({
      search: action.payload,
      page: 1,
      sort_field: 'id',
      sort_asc: 1,
    }),
  );
  yield call(fetchDataWorker);
}

export function* deleteContactWorker(
  action: ContactListDeleteWorker,
): SagaIterator {
  // yield call(logger, 'deleteContactWorker', action.payload);
  try {
    yield put(contactListActions.setIsLoading(true));
    yield put(contactListActions.setRequestError(null));
    const requestConfig: ReturnType<typeof getDeleteCategoryRequestConfig> =
      yield call(getDeleteCategoryRequestConfig, action.payload);
    yield call(requestExecutor, requestConfig, null);
    yield call(fetchDataWorker);

    const contactListResponse: ReturnType<
      typeof contactListSelectors.getContactListResponse
    > = yield select(contactListSelectors.getContactListResponse);
    if (contactListResponse) {
      const isEmpty = contactListResponse.data.length === 0;
      const isNotLastPage =
        contactListResponse.current_page > contactListResponse.last_page;
      if (isEmpty && isNotLastPage) {
        yield put(
          contactListActions.setRequestOptions({
            page: contactListResponse.last_page,
          }),
        );
        yield call(fetchDataWorker);
      }
    }
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
