import React from 'react';
import { LinearProgress, styled } from '@mui/material';
import { useAppSelector } from '../../store/hooks';
import { authSelectors } from '../../store/auth';
import { contactListSelectors } from '../../features/contactList/contactListReducer';
import { contactSelectors } from '../../features/contact/contactReducer';

export const ProgressBar: React.FC = () => {
  const auth = useAppSelector(authSelectors.getIsLoading);
  const userData = useAppSelector(authSelectors.getIsLoadingUserData);
  const contactList = useAppSelector(contactListSelectors.getIsLoading);
  const contact = useAppSelector(contactSelectors.getIsLoading);

  const isLoading = auth || userData || contactList || contact;

  return isLoading ? <StyledLinearProgress color="secondary" /> : null;
};

const StyledLinearProgress = styled(LinearProgress)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 4px;
  z-index: 10000;
`;
