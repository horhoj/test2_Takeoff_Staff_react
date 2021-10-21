import React from 'react';
import { Alert, Box, styled } from '@mui/material';
import { AlertBlockProps } from './types';

export const AlertBlock: React.FC<AlertBlockProps> = ({ requestError }) => {
  const msg = requestError.errorMsg;
  return (
    <StyledAlert severity={'error'}>
      <Box>{msg}</Box>
    </StyledAlert>
  );
};

const StyledAlert = styled(Alert)`
  width: 100%;
`;
