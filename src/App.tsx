import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import { DARK_THEME } from 'theme/types';
import AppLayout from 'components/AppLayout';

const App = () => {
  return (
    <ThemeProvider theme={theme(DARK_THEME)}>
      <AppLayout />
    </ThemeProvider>
  );
};

export default App;
