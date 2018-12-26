import React from 'react';
import { styled, Card, Button, Overlay, Block, Backdrop, Flex, Grid, withTheme } from 'reakit';
import { palette as p } from 'styled-tools';
import moment from 'moment';

import PlateItem from './PlateItem';
import { ButtonForm } from '../../../components/common';


class Plate extends React.Component {
  render() {
    const { theme, team1, team2, homeTeam, commenceTime, sites, h2h, gutter } = this.props;
    const template = `
      "a b" auto / 120px auto
    `;
    return (
      <MyGrid template={template} gap="16px">
        <Grid.Item area="a">
          <Time>
            <div>
              {moment(commenceTime * 1000).format('MMM DD')}
            </div>
            <div>
              {moment(commenceTime * 1000).format('h:mm a')}
            </div>
          </Time>
        </Grid.Item>
        <Grid.Item area="b">
          <PlateItem team={team1} h2h={h2h[0]} top />
          <Hr />
          <PlateItem team={team2} h2h={h2h[1]} />
        </Grid.Item>
      </MyGrid>
    );
  }
}

export default withTheme(Plate);

const Time = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  background-color: ${p('white')};
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  /* height: 100%; */
`;

const MyGrid = styled(Grid)`
  margin-bottom: 2rem;
`;

const Hr = styled.div`
  height: 1px;
  width: 100%;
  margin: 0;
`;
