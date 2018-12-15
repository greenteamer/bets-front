import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from "react-apollo";

import './index.css';
import App from './App';
import AppProvider from './wrappers/AppStore';
import client from './apolloClient';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </AppProvider>
  </BrowserRouter>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
window.client = client;
serviceWorker.unregister();
