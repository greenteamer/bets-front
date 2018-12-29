import React from 'react';
import { Query } from 'react-apollo';
import { map, get } from 'lodash';
import { styled, Card, Button, Overlay, Block, Backdrop, Flex, Grid, withTheme, Heading } from 'reakit';
import { palette as p } from 'styled-tools';

import { GET_ODDS } from '../../graphql/queries';
import Plate from './Plate';
import { formatUS } from './utils';


class OddsTable extends React.Component {

  render() {
    const { theme, odds } = this.props;
    const groupName = get(this.props, ['match', 'params', 'groupName']);
    const template = `
      "a a1 ab ac ad" auto
      "c c c c c" auto / 136px auto 120px 120px 120px
    `;
    if (odds.length === 0) return <p>no odds</p>;
    return (
      <Wrapper>
        <Heading as="h4">{ odds[0].sport_nice }</Heading>
        <Grid template={template} gap="16px 0">
          <MyGridItem area="a" left><Label>Date 1</Label></MyGridItem>
          <MyGridItem area="a1"></MyGridItem>
          <MyGridItem area="ab"><Label>Spread</Label></MyGridItem>
          <MyGridItem area="ac"><Label>Total</Label></MyGridItem>
          <MyGridItem area="ad" right><Label>M Line</Label></MyGridItem>
          <Grid.Item area="c" backgroundColor={theme.palette.iceBlue}>
            {map(odds, (odd, index) => (
              <Plate
                key={index}
                gutter="1rem 0"
                odd={odd}
              />
            ))}
          </Grid.Item>
        </Grid>
      </Wrapper>
    );
  }
}

export default withTheme(OddsTable);

const Wrapper = styled.div`
  flex: 1;
`;

const MyOverlay = styled(Overlay)`
  background-color: ${p('grayscale', -2)};
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
  text-align: center;
  /* justify-items: center; */
`;
