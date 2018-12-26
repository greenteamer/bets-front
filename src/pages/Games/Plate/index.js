import React from 'react';
import {
  styled,
} from 'reakit';
import { palette as p } from 'styled-tools';

import PlateItem from './PlateItem';
import { ButtonForm } from '../../../components/common';


class Plate extends React.Component {
  render() {
    const { team1, team2, homeTeam, commenceTime, sites, h2h, gutter } = this.props;
    return (
      <div style={{ margin: gutter }}>
        <PlateItem team={team1} h2h={h2h[0]} top />
        <Hr />
        <PlateItem team={team2} h2h={h2h[1]} />
      </div>
    );
  }
}

export default Plate;

const Hr = styled.div`
  height: 1px;
  width: 100%;
  margin: 0;
`;
