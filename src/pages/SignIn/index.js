import React, { Component } from 'react';
// import styled from 'styled-components';
import { graphql } from "react-apollo";
import { Button, Input, Field, Label, styled, Backdrop, Overlay } from 'reakit';
import { Link } from 'react-router-dom';
import { palette as p } from 'styled-tools';
import Cookie from 'js-cookie';

// import Button from '../../components/common/Button';
import { appConsumerWrapper } from '../../wrappers/AppStore';
import { SIGN_IN } from '../../graphql/mutations';
import { GET_ME } from '../../graphql/queries';
import SidebarMenu from '../../components/SidebarMenu';
import ContentLayout from '../../components/Layouts/ContentLayout';


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
      },
      update: (cache, result) => {
        const { data: { signIn: { me } } } = result;
        // const data = { me };
        console.log('>>> sign in update: ', { me });
        cache.writeQuery({
          query: GET_ME,
          data: { me },
        });
      }
    }).then(result => {
      const { data: { signIn: { token, me } } } = result;
      Cookie.set('token', token)
      this.props.history.push('/games');
    }).catch(error => {
      console.log('>>>> mutate error: ', { error });
    });
  }

  render() {
    const { username, password } = this.state;

    return (
      <ContentLayout>
        <Overlay.Container>
          {overlay => (
            <Container>
              <MyBackdrop visible={true} />
              <MyOverlay fade slide {...overlay} visible={true}>
                <h3>Sign In</h3>
                <Field marginBottom="1rem">
                  <Input
                    id="username"
                    placeholder="email or username"
                    value={username}
                    onChange={this.handleOnChange('username')}
                  />
                </Field>
                <Field marginBottom="1rem">
                  <Input
                    id="password"
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={this.handleOnChange('password')}
                  />
                </Field>
                <Button onClick={this.handleOnSignIn} primary>Sign In</Button>
                <MyLink to="/">go to home page</MyLink>
              </MyOverlay>
            </Container>
          )}
        </Overlay.Container>
      </ContentLayout>
    );
  }
}

export default graphql(SIGN_IN)(appConsumerWrapper(SignIn));

const MyLink = styled(Link)`
  float: right;
`;

const Container = styled.div`
  padding: 1rem;
  background-color: ${p('grayscale', -2)};
`;

const MyOverlay = styled(Overlay)`
  min-width: 300px;
  background-color: ${p('grayscale', -2)};
`;

const MyBackdrop = styled(Backdrop)`
  background-color: white;
`;
