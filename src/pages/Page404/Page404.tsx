import React from 'react';
import { Box, styled, Typography } from '@mui/material';

export const Page404: React.FC = () => {
  return (
    <Wrap>
      <Typography>Ошибка 404</Typography>
      <Typography>Запрошенная страница не существует</Typography>
      <Typography>Нажмите кнопку НАЗАД в вашем браузере</Typography>
      <Typography>или введите другой адрес в поисковой строке</Typography>
    </Wrap>
  );
};

const Wrap = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
