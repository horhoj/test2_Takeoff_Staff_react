import React from 'react';
import { LinearProgress } from '@mui/material';
import { useAppSelector } from '../../store/hooks';
import { authSelectors } from '../../store/auth';

export const ProgressBar: React.FC = () => {
  const auth = useAppSelector(authSelectors.getIsLoading);

  const isLoading = auth;

  return isLoading ? <LinearProgress color="secondary" /> : null;
};
