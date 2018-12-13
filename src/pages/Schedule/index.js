
import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';


const MessageContainer = styled.div`
  display: block;
  border: 1px solid #366d9d;
  padding: 1rem;
  margin: 1rem;
`;

const Messages = () => (
  <Query
    query={gql`
      {
        messages {
          id
          text
          createdAt
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error...</p>
      return data.messages.map(({ id, text, createdAt }) => (
        <MessageContainer key={id}>
          <p>{text}</p>
          <p>{createdAt}</p>
        </MessageContainer>
      ));
    }}
  </Query>
)

export default Messages;

