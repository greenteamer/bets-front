import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Header from '../components/Header';
import { AppContext } from './AppStore';

import { GET_ME } from '../graphql/queries';


const SecureWrapper = (Children) => (props) => (
  <Query query={GET_ME} fetchPolicy="network-only">
    {({ client, loading, data: { me } }) => {
      if (loading) {
        return <p className="navbar-text navbar-right">Loading...</p>;
      }
      if (!me) {
        props.history.push('sign-in');
        return null;
      }
      if (me) {
        return (
          <Children me={me} {...props} />
        );
      }
    }}
  </Query>
);

export default SecureWrapper;