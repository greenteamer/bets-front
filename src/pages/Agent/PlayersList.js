import React from 'react';
import { Query } from 'react-apollo';
import { map, get } from 'lodash';
import { styled, Button, Overlay, Block, Backdrop } from 'reakit';
import { palette as p } from 'styled-tools';

import { GET_USER_PLAYERS } from '../../graphql/queries';
import CreatePlayerForm from './CreatePlayerForm';
import PlayerItem from './PlayerItem';


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
    return (
      <Query query={GET_USER_PLAYERS} fetchPolicy="network-only">
        {({ loading, client, data }) => {
          const players = get(data, ['me', 'players']);
          const me = get(data, ['me']);
          if (!players) return <div>Loading....</div>;
          return (
            <div>
              <Overlay.Container>
                {overlay => (
                  <Block>
                    <Button as={Overlay.Show} {...overlay}>Sign Up player</Button>
                    <Backdrop fade as={Overlay.Hide} {...overlay} />
                    <MyOverlay fade slide {...overlay}>
                      <CreatePlayerForm me={me} onHide={overlay.hide} />
                    </MyOverlay>
                  </Block>
                )}
              </Overlay.Container>
              {map(players, player => (
                <ListContainer>
                  <PlayerItem
                    username={player.username}
                    email={player.email}
                    key={player.id}
                  />
                </ListContainer>
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

const ListContainer = styled.div`
  margin-top: 1rem;
`;