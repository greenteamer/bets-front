import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Header from './components/Header';
import Main from './Main';


const App = () => (
  <Query
    query={gql`
      {
        me {
          id
          username
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error...</p>
      console.log('>>> App data: ', { data });
      return (
        <div>
          <Header />
          <Main />
        </div>
      );
    }}
  </Query>
)

export default App;
