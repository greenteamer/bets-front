import React from 'react';
import { Query } from 'react-apollo';
import { map, get } from 'lodash';

import { GET_USER_PLAYERS } from '../../graphql/queries';
import Button from '../../components/common/Button';
import CreatePlayerForm from './CreatePlayerForm';


const PlayerRaw = ({ player }) => (
  <div key={player.id} style={{ backgroundColor: '#eaeaea', padding: '3px', marginBottom: '3px' }}>
    <div>{player.username}</div>
    <div>{player.email}</div>
  </div>
);

class PlayersList extends React.Component {

  render() {
    return (
      <Query query={GET_USER_PLAYERS} fetchPolicy="network-only">
        {({ loading, client, data }) => {

          const players = get(data, ['me', 'players']);
          if (!players) return <div>Loading....</div>;
          console.log('>>> players: ', players)
          return (
            <div>
              <h3>Add player</h3>
              <CreatePlayerForm />

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
