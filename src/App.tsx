import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from './GlobalStyles';
import { RoutesStructure } from './router';

export const App: React.FC = () => {
  return (
    <Container>
      <BrowserRouter>
        <RoutesStructure />
      </BrowserRouter>
    </Container>
  );
};
