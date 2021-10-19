import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RoutesStructure } from './router';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RoutesStructure />
    </BrowserRouter>
  );
};
