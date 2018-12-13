import React, { Component } from 'react';
import styled from 'styled-components';
import gql from "graphql-tag";
import { Mutation, graphql } from "react-apollo";
import Cookie from 'js-cookie';

import Button from '../../components/common/Button';


const PageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CardContainer = styled.div`
  width: 22rem;
  background: white;
  border-radius: 0.5rem;
  justify-content: center;
  margin-top: 2rem;
  box-shadow: 1px 2px 50px rgba(0,0,0,0.1);
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const CardHeader = styled.h1`
  text-align: center;
  border-bottom: 1px solid #c8e0f5;
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
`;

const signInMutation = gql`
  mutation ($username: String!, $password: String!) {
    signIn(login: $username, password: $password) {
      token
    }
  }
`;

class SignIn extends Component { 

  state = {
    username: '',
    password: '',
  }

  handleOnChange = type => e => {
    this.setState({ [type]: e.target.value });
  }

  handleOnSignIn = () => {
    const { mutate } = this.props;
    const { username, password } = this.state;
    mutate({
      variables: {
        username,
        password,
      }
    }).then(result => {
      const { data: { signIn } } = result;
      Cookie.set('token', signIn.token)
    }).catch(error => {
      console.log('>>>> mutate error: ', { error });
    });
  }

  render() {
    const { username, password } = this.state;

    return (
      <PageContainer>
        <CardContainer>
          <CardHeader>Sign In</CardHeader>
          <CardContent>
            <div>
              <p>email or username</p>
              <input type="text" value={username} onChange={this.handleOnChange('username')} />
            </div>
            <div>
              <p>password</p>
              <input type="password" value={password} onChange={this.handleOnChange('password')}/>
            </div>
            <ButtonContainer>
              <Button onClick={this.handleOnSignIn}>Sign In</Button>
            </ButtonContainer>
          </CardContent>
        </CardContainer>
      </PageContainer>
    );
  }
}

export default graphql(signInMutation)(SignIn);
