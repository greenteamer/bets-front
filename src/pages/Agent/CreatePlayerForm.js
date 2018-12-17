import React from 'react';
import { graphql } from "react-apollo";
import { get } from 'lodash';

import Button from '../../components/common/Button';
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
    const { username, email, password } = this.state;
    console.log('>>> sign up handle on create player: ', { me });
    mutate({
      variables: {
        username,
        email,
        password,
        role: ROLES.PLAYER,
        agentId: me.id,
      },
      update: (cache, { data }) => {
        const newPlayer = get(data, ['signUp']);
        const root = cache.readQuery({ query: GET_ME })
        console.log('>>> sign up update: ', { newPlayer, root });
        cache.writeQuery({
          query: GET_ME,
          data: {
            me: {
              ...root.me,
              players: root.me.players.concat([newPlayer]),
            },
          },
        });
      }
    }).then(result => {
      const { data: { signUp } } = result;
      console.log('>>>> mutate result: ', { signUp });
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
      <div style={{ padding: '10px' }}>
        <div>
          <p>username</p>
          <input type="text" value={username} onChange={this.handleOnChangeInput('username')} />
        </div>
        <div>
          <p>email</p>
          <input type="email" value={email} onChange={this.handleOnChangeInput('email')} />
        </div>
        <div>
          <p>password</p>
          <input type="password" value={password} onChange={this.handleOnChangeInput('password')} />
        </div>
        <Button onClick={this.handleOnAddPlayer} primary>Create</Button>
      </div>
    )
  }
}

export default graphql(SIGN_UP)(CreatePlayerForm);