import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Cookie from 'js-cookie';

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';

import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { errorParser } from './utils/errors';

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = Cookie.get('token');
  return {
    headers: {
      ...headers,
      'Authorization': token ? token : '',
    }
  }
});

const logLink = onError(({ graphQLErrors, networkError }) => {
  const errorArr = errorParser({ graphQLErrors, networkError });
  console.log('^^^^ errors handler: ', errorArr);
  errorArr.map(err => {
    if (err.statusCode === 401) {
      Cookie.set('token', '');
      window.location.href = '/sign-in';
    }
  })
});

const client = new ApolloClient({
  link: logLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
window.client = client;
serviceWorker.unregister();
