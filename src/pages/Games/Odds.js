import React from 'react';
import { Query } from 'react-apollo';
import { map, get } from 'lodash';
import { styled, Card, Button, Overlay, Block, Backdrop } from 'reakit';
import { palette as p } from 'styled-tools';

import { GET_ODDS } from '../../graphql/queries';
import Plate from '../../components/Plate';
import { formatUS } from './utils';


const PlayerRaw = ({ player }) => (
  <div key={player.id} style={{ backgroundColor: '#eaeaea', padding: '3px', marginBottom: '3px' }}>
    <div>{player.username}</div>
    <div>{player.email}</div>
  </div>
);

class Odds extends React.Component {

  toggleForm = () => {
    this.setState({
      showForm: !this.showForm,
    });
  }

  render() {
    const groupName = get(this.props, ['match', 'params', 'groupName']);
    return (
      <Query query={GET_ODDS} variables={{ sport_key: groupName }}>
        {({ loading, client, data }) => {
          const odds = get(data, ['odds']);
          if (!odds) return <div>Loading....</div>;
          // console.log('**** ODDS: ', { groupName, odds });
          const formatH2H = odd => {
            const sites = get(odd, ['sites']);
            const values = get(sites[0], ['odds', 'h2h']);
            return map(values, formatUS);
          }
          return (
            <div>
              {map(odds, (odd, index) => (
                <Plate
                  key={index}
                  gutter="1rem 0"
                  team1={odd.teams[0]}
                  team2={odd.teams[1]}
                  homeTeam={odd.home_team}
                  commenceTime={odd.commence_time}
                  sites={odd.sites}
                  h2h={formatH2H(odd)}
                />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Odds;

const MyOverlay = styled(Overlay)`
  background-color: ${p('grayscale', -2)};
`;
