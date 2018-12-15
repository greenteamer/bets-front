import React, { Component } from 'react';
import { Mutation, graphql, Query, renderToStringWithData } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Button from '../../components/common/Button';


const MessageContainer = styled.div`
  display: block;
  border: 1px solid #366d9d;
  padding: 1rem;
  margin: 1rem;
`;

const createMessage = gql`
  mutation ($text: String!) {
    createMessage(text: $text) {
      message {
        id
        text
      }
      me {
        id
        username
        messages {
          id
          text
        }
      }
    }
  }
`;

class Messages extends Component {
  state = {
    text: '',
  }

  handleOnChangeText = (e) => {
    this.setState({ text: e.target.value });
  }

  handleOnSave = () => {
    const { mutate } = this.props;
    const { text } = this.state;
    mutate({
      variables: {
        text,
      }
    }).then(result => {
      console.log('>>>> mutate result: ', { result });
    }).catch(error => {
      console.log('>>>> mutate error: ', { error });
    });
  }

  render() {
    const { text } = this.state;
    return (
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
          return ( 
            <div>
              <div>
                <p>text</p>
                <input type="text" value={text} onChange={this.handleOnChangeText} />
              </div>
              <Button onClick={this.handleOnSave}>Save</Button>
              {data.messages.map(({ id, text, createdAt }) => (
                <MessageContainer key={id}>
                  <p>{text}</p>
                  <p>{createdAt}</p>
                </MessageContainer>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default graphql(createMessage)(Messages);

