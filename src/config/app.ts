import { RouterPathNames } from '../router/types';

export const IS_LOGGING_ENABLED =
  process.env.REACT_APP_IS_LOGGING_ENABLED === 'TRUE';

export const API_URL =
  process.env.REACT_APP_BASE_URL || 'http://89.108.88.53:8080/api/v1';

export const ACCESS_TOKEN_LS_KEY = 'token';

export const DEFAULT_REQUEST_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const DEFAULT_HOME_PAGE: RouterPathNames = 'contactList';

export const DEFAULT_ENTITY_LIST_ALLOWABLE_VALUES = [
  5, 10, 25, 50, 999,
] as const;

export const DEFAULT_ENTITY_LIST_PER_PAGE: typeof DEFAULT_ENTITY_LIST_ALLOWABLE_VALUES[number] = 5;

export const NEW_ITEM_ID = 'new';
