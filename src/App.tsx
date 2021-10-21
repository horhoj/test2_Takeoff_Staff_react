import React, { useEffect } from 'react';
import { RoutesStructure } from './router';
import './GlobalStyles.css';
import { ProgressBar } from './ui/ProgressBar';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { authSelectors, authWorkers } from './store/auth';
import { Header } from './components/Header';

export const App: React.FC = () => {
  const isLoadingUserData = useAppSelector(authSelectors.getIsLoadingUserData);
  // const isAuthenticated = useAppSelector(authSelectors.getIsAuthenticated);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authWorkers.authGetUserData());
  }, []);
  return (
    <>
      <ProgressBar />
      <Header />
      {isLoadingUserData ? null : <RoutesStructure />}
    </>
  );
};
