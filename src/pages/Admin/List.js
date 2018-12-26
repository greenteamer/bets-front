import React from 'react';
import { Query } from 'react-apollo';
import { map, get } from 'lodash';
import { styled, Button, Overlay, Block, Backdrop } from 'reakit';
import { palette as p } from 'styled-tools';

import { GET_USERS } from '../../graphql/queries';
import CreateUserForm from './CreateUserForm';


const PlayerRaw = ({ player }) => (
  <div key={player.id} style={{ backgroundColor: '#eaeaea', padding: '3px', marginBottom: '3px' }}>
    <div>{player.username}</div>
    <div>{player.email}</div>
  </div>
);

class PlayersList extends React.Component {

  toggleForm = () => {
    this.setState({
      showForm: !this.showForm,
    });
  }

  render() {
    console.log('**** Player List props: ', { props: this.props });
    return (
      <Query query={GET_USERS} fetchPolicy="network-only">
        {({ loading, client, data }) => {
          const users = get(data, ['users']);
          const me = get(data, ['me']);
          if (!users) return <div>Loading....</div>;
          return (
            <div>
              <h3>Add user</h3>
              <Overlay.Container>
                {overlay => (
                  <Block>
                    <Button as={Overlay.Show} {...overlay}>Add</Button>
                    <Backdrop fade as={Overlay.Hide} {...overlay} />
                    <MyOverlay fade slide {...overlay}>
                      <CreateUserForm me={me} onHide={overlay.hide} />
                    </MyOverlay>
                  </Block>
                )}
              </Overlay.Container>
              <h3>User list {users.length}</h3>
              {map(users, user => (
                <PlayerRaw player={user} key={user.id} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default PlayersList;

const MyOverlay = styled(Overlay)`
  background-color: ${p('grayscale', -2)};
`;
