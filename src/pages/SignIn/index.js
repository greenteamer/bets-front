import React, { Component } from 'react';
import styled from 'styled-components';
import gql from "graphql-tag";
import { Mutation, graphql } from "react-apollo";
import Cookie from 'js-cookie';

import Button from '../../components/common/Button';
import { appConsumerWrapper } from '../../wrappers/AppStore';
import { SIGN_IN } from '../../graphql/mutations';
import { GET_ME } from '../../graphql/queries';


class SignIn extends Component { 

  state = {
    username: '',
    password: '',
  }

  handleOnChange = type => e => {
    this.setState({ [type]: e.target.value });
  }

  handleOnSignIn = () => {
    const { mutate, updateUserInfo } = this.props;
    const { username, password } = this.state;
    mutate({
      variables: {
        username,
        password,
      },
      // update: (cache, result) => {
      //   console.log('>>> update: ', { cache, result });
      //   const { data: { signIn: { me } } } = result;
      //   // const { me } = cache.readQuery({ query: GET_ME });
      //   cache.writeQuery({
      //     query: GET_ME,
      //     data: { me },
      //   });
      // }
    }).then(result => {
      const { data: { signIn: { token, me } } } = result;
      console.log('>>>> mutate result: ', { token, me });
      // updateUserInfo(me);
      Cookie.set('token', token)
      this.props.history.push('/games');
    }).catch(error => {
      console.log('>>>> mutate error: ', { error });
    });
  }

  render() {
    const { username, password } = this.state;
    const { user, updateUserInfo } = this.props;

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
              <Button onClick={this.handleOnSignIn} primary>Sign In</Button>
            </ButtonContainer>
          </CardContent>
        </CardContainer>
      </PageContainer>
    );
  }
}

export default graphql(SIGN_IN)(appConsumerWrapper(SignIn));

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