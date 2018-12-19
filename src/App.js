import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { get } from 'lodash';

import Header from './components/Header';
import Routes from './Routes';
import { GET_ME } from './graphql/queries';
import { GlobalStyle } from './components/common'


const App = () => (
  <Query query={GET_ME} fetchPolicy="network-only">
    {({ client, loading, data }) => {
      const me = get(data, ['me']);
      return (
        <div>
          <Header me={me} />
          <Routes me={me} />
          <GlobalStyle />
        </div>
      );
    }}
  </Query>
);

export default App;