import React from 'react';
import { RoutesStructure } from './router';
import './GlobalStyles.css';
import { ProgressBar } from './ui/ProgressBar';

export const App: React.FC = () => {
  return (
    <>
      <ProgressBar />
      <RoutesStructure />
    </>
  );
};
