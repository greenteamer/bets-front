import React from 'react';
import { Query } from 'react-apollo';
import { map, get } from 'lodash';
import { styled, Button, Overlay, Block, Backdrop } from 'reakit';
import { palette as p } from 'styled-tools';

import { GET_USER_PLAYERS } from '../../graphql/queries';
import CreatePlayerForm from './CreatePlayerForm';


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
      <Query query={GET_USER_PLAYERS} fetchPolicy="network-only">
        {({ loading, client, data }) => {
          const players = get(data, ['me', 'players']);
          const me = get(data, ['me']);
          if (!players) return <div>Loading....</div>;
          return (
            <div>
              <h3>Add player</h3>
              <Overlay.Container>
                {overlay => (
                  <Block>
                    <Button as={Overlay.Show} {...overlay}>Click me</Button>
                    <Backdrop fade as={Overlay.Hide} {...overlay} />
                    <MyOverlay fade slide {...overlay}>
                      <CreatePlayerForm me={me} onHide={overlay.hide} />
                    </MyOverlay>
                  </Block>
                )}
              </Overlay.Container>
              <h3>Players list {players.length}</h3>
              {map(players, player => (
                <PlayerRaw player={player} key={player.id} />
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
