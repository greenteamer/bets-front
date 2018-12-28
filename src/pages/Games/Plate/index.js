import React from 'react';
import { styled, Card, Button, Overlay, Block, Backdrop, Flex, Grid, withTheme } from 'reakit';
import { palette as p } from 'styled-tools';
import moment from 'moment';
import { map, get } from 'lodash';

import PlateItem from './PlateItem';
import { ButtonForm } from '../../../components/common';
import { formatUS } from '../utils';


class Plate extends React.Component {
  render() {
    const { theme, gutter, odd } = this.props;
    const { teams, homeTeam, commence_time: commenceTime, sites, h2h, id } = odd;

    console.log('>>> Odd(event) id: ', { odd });

    const formatH2H = odd => {
      const sites = get(odd, ['sites']);
      const values = get(sites[0], ['odds', 'h2h']);
      return map(values, formatUS);
    }

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
          <PlateItem
            eventId={odd.id}
            siteKey={sites[0].site_key}
            oddType="h2h"
            oddIndex={0}
            team={teams[0]}
            h2h={formatH2H(odd)[0]}
            top
          />
          <Hr />
          <PlateItem
            eventId={odd.id}
            siteKey={sites[0].site_key}
            oddType="h2h"
            oddIndex={1}
            team={teams[1]}
            h2h={formatH2H(odd)[1]}
          />
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
