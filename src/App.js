import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { get } from 'lodash';

import Header from './components/Header';
import Routes from './Routes';
import { GET_ME } from './graphql/queries';


const App = () => (
  <Query query={GET_ME} fetchPolicy="network-only">
    {({ client, loading, data }) => {
      const me = get(data, ['me']);
      console.log('*** App *** me: ', { me });
      return (
        <div>
          <Header me={me} />
          <Routes me={me} />
        </div>
      );
    }}
  </Query>
);

export default App;