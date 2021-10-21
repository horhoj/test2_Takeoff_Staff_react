import React from 'react';
import { Box, Button, styled, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { authSelectors, authWorkers } from '../../store/auth';

export const Header: React.FC = () => {
  const userData = useAppSelector(authSelectors.getUserData);
  const isAuthenticated = useAppSelector(authSelectors.getIsAuthenticated);
  const dispatch = useAppDispatch();

  const handleLogoutBtnClk = () => {
    dispatch(authWorkers.authSignOut());
  };

  return (
    <Wrap>
      <Container>
        {!userData ? null : (
          <Box>
            <Typography>
              <Bold>Имя пользователя: </Bold>
              {userData.name}
            </Typography>
            <Typography>
              <Bold>Имя почта: </Bold>
              {userData.email}
            </Typography>
          </Box>
        )}
        {!isAuthenticated ? null : (
          <Box>
            <Button variant={'contained'} onClick={handleLogoutBtnClk}>
              Выход
            </Button>
          </Box>
        )}
      </Container>
    </Wrap>
  );
};

const Wrap = styled(Box)`
  width: 100%;
  padding: 0 20px;
`;

const Container = styled(Box)`
  max-width: 1000px;
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Bold = styled('span')`
  font-weight: 500;
`;
