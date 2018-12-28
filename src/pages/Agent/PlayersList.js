import React from 'react';
import { Query } from 'react-apollo';
import { map, get } from 'lodash';
import { styled, Button, Overlay, Block, Backdrop, Grid } from 'reakit';
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

const template = `
  "a a1 ab ac ad" auto
  "c c c c c" auto / 1fr 1fr 120px 120px 120px
`;

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
                    <Button as={Overlay.Show} {...overlay} marginBottom="2rem">Sign Up player</Button>
                    <Backdrop fade as={Overlay.Hide} {...overlay} />
                    <MyOverlay fade slide {...overlay}>
                      <CreatePlayerForm me={me} onHide={overlay.hide} />
                    </MyOverlay>
                  </Block>
                )}
              </Overlay.Container>

              <Grid template={template} gap="16px 0">
                <MyGridItem area="a" left><Label>Username</Label></MyGridItem>
                <MyGridItem area="a1"><Label>Email</Label></MyGridItem>
                <MyGridItem area="ab"><Label center>Balance</Label></MyGridItem>
                <MyGridItem area="ac"><Label center>Available</Label></MyGridItem>
                <MyGridItem area="ad" right><Label center>At Risk</Label></MyGridItem>
                <Grid.Item area="c">
                  {map(players, player => (
                    <ListContainer key={player.id}>
                      <PlayerItem
                        id={player.id}
                        username={player.username}
                        email={player.email}
                        balance={player.balance}
                        available={player.available}
                        atRisk={player.atRisk}
                        key={player.id}
                      />
                    </ListContainer>
                  ))}
                </Grid.Item>
              </Grid>

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

const MyGridItem = styled(Grid.Item)`
  padding: 0.5rem 0;
  background-color: ${p('white')};
  border-top-left-radius: ${props => props.left ? '0.5rem' : 0};
  border-bottom-left-radius: ${props => props.left ? '0.5rem' : 0};
  border-top-right-radius: ${props => props.right ? '0.5rem' : 0};
  border-bottom-right-radius: ${props => props.right ? '0.5rem' : 0};
`;

const Label = styled.div`
  text-align: ${props => props.center ? 'center' : 'left'};
  margin-left: 1rem;
  /* justify-items: center; */
`;
