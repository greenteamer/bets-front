import React from 'react';
import { Query } from 'react-apollo';
import { map, get } from 'lodash';
import { styled, Card, Button, Overlay, Block, Backdrop, Flex, Grid, withTheme } from 'reakit';
import { palette as p } from 'styled-tools';

import { GET_ODDS } from '../../graphql/queries';
import Plate from './Plate';
import { formatUS } from './utils';
import OddsTable from './OddsTable';


class Odds extends React.Component {
  render() {
    const groupName = get(this.props, ['match', 'params', 'groupName']);
    return (
      <Query query={GET_ODDS} variables={{ sport_key: groupName }}>
        {({ loading, client, data }) => {
          const odds = get(data, ['odds']);
          if (!odds) return <div>Loading....</div>;
          return (
            <Wrapper>
              <OddsTable odds={odds} />
            </Wrapper>
          );
        }}
      </Query>
    );
  }
}

export default Odds;

const Wrapper = styled.div`
  flex: 1;
`;

const Item = styled.div`
  background: darkorange;
  text-align: center;
  padding: 50px;
  color: white;
`
function CarouselItem(props) {
  return (
    <Item>Item {props.index} of {props.numSlides}</Item>
  )
}