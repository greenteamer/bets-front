import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from "react-apollo";
import { Provider } from 'reakit';
// import theme from 'reakit-theme-default';

import './index.css';
import theme from './theme';
import App from './App';
import AppProvider from './wrappers/AppStore';
import client from './apolloClient';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <ApolloProvider client={client}>
        <Provider theme={theme}>
          <App />
        </Provider>
      </ApolloProvider>
    </AppProvider>
  </BrowserRouter>
  , document.getElementById('root')
  // , document.body
);


window.client = client;
serviceWorker.unregister();
