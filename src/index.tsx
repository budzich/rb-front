import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from 'store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import * as serviceWorker from './serviceWorker';
import theme from 'theme';
import { DARK_THEME } from 'theme/types';
import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme(DARK_THEME)}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
