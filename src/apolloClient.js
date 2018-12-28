import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Cookie from 'js-cookie';

import { errorParser } from './utils/errors';


const httpLink = createHttpLink({
  uri: 'http://itkartell.ru:5000/graphql',
  // uri: process.env.NODE_ENV === 'production'
  //   ? 'http://itkartell.ru:5000/graphql'
  //   : 'http://localhost:5000/graphql',
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
  console.log('^^^^ errors handler: ', { graphQLErrors, networkError });
  errorArr.map(err => {
    if (err.statusCode === 401) {
      Cookie.set('token', '');
      window.location.href = '/sign-in';
    }
  })
});

export default new ApolloClient({
  link: logLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
});
