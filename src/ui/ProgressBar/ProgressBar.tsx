import React from 'react';
import { LinearProgress } from '@mui/material';
import { useAppSelector } from '../../store/hooks';
import { authSelectors } from '../../store/auth';
import { contactListSelectors } from '../../features/contactListReducer';

export const ProgressBar: React.FC = () => {
  const auth = useAppSelector(authSelectors.getIsLoading);
  const userData = useAppSelector(authSelectors.getIsLoadingUserData);
  const contactList = useAppSelector(contactListSelectors.getIsLoading);

  const isLoading = auth || userData || contactList;

  return isLoading ? <LinearProgress color="secondary" /> : null;
};
