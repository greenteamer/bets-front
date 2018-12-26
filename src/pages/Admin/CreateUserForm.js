import React from 'react';
import { graphql } from "react-apollo";
import { get } from 'lodash';
import { Button, Input, Field, Label, styled } from 'reakit';
import { palette as p } from 'styled-tools';

import { SIGN_UP } from '../../graphql/mutations';
import { GET_USER_PLAYERS, GET_ME } from '../../graphql/queries';
import { ROLES } from '../../constants'


class CreatePlayerForm extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
  }

  handleOnAddPlayer = () => {
    const { mutate, me } = this.props;
    console.log('>>>> handle on add user me: ', { me });
    const { username, email, password } = this.state;
    mutate({
      variables: {
        username,
        email,
        password,
        role: ROLES.AGENT,
        // agentId: me.id,
      },
      // update: (cache, { data }) => {
      //   const newPlayer = get(data, ['signUp']);
      //   const root = cache.readQuery({ query: GET_ME })
      //   cache.writeQuery({
      //     query: GET_ME,
      //     data: {
      //       me: {
      //         ...root.me,
      //         players: root.me.players.concat([newPlayer]),
      //       },
      //     },
      //   });
      // }
    }).then(result => {
      const { data: { signUp } } = result;
      const { onHide } = this.props;
      onHide();
      // this.props.history.push('/games');
    }).catch(error => {
      console.log('>>>> mutate error: ', { error });
    });
  }

  handleOnChangeInput = (name) => (e) => {
    this.setState({ [name]: e.target.value });
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <Container>
        <h3>Create Player</h3>
        <Field marginBottom="1rem">
          <Input
            id="username"
            placeholder="username"
            value={username}
            onChange={this.handleOnChangeInput('username')}
          />
        </Field>
        <Field marginBottom="1rem">
          <Input
            id="email"
            placeholder="email"
            type="email"
            value={email}
            onChange={this.handleOnChangeInput('email')}
          />
        </Field>
        <Field marginBottom="1rem">
          <Input
            id="password"
            placeholder="password"
            type="password"
            value={password}
            onChange={this.handleOnChangeInput('password')}
          />
        </Field>
        <Button onClick={this.handleOnAddPlayer} primary>Create</Button>
      </Container>
    )
  }
}

export default graphql(SIGN_UP)(CreatePlayerForm);

const Container = styled.div`
  padding: 1rem;
  background-color: ${p('grayscale', -2)};
`;
