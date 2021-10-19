import { RootState } from '../types';
import { AppRedirectUrl } from './types';

export const getIsDarkMode = (state: RootState): boolean =>
  state.app.isDarkMode;

export const getIsOpenMenu = (state: RootState): boolean =>
  state.app.isOpenMenu;

export const getIsSmallWidth = (state: RootState): boolean =>
  state.app.isSmallWidth;

export const getRedirectUrl = (state: RootState): AppRedirectUrl | null =>
  state.app.redirectUrl;
