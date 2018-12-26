import React from 'react';
import { Link, Route } from 'react-router-dom'
import { Query } from 'react-apollo';
import { get, groupBy } from 'lodash';
import { Block, Flex, Grid, withTheme } from 'reakit';

import { GET_SPORTS } from '../../graphql/queries';
import Odds from './Odds';
import Menu from './GamesMenu';

const template = `
  "b c c" minmax(200px, 1fr)
  "d d d" 100px / 1fr 2fr 2fr
`;

const Games = ({ match, theme }) => (
  <Query query={GET_SPORTS}>
    {({ loading, client, data }) => { 
      const sports = get(data, ['sports']);
      const groupedSports = groupBy(sports, 'group');
      return (
        <Grid template={template}>
          <Grid.Item area="b" backgroundColor={theme.palette.slate}>
            <Menu match={match} tree={groupedSports} />
          </Grid.Item>
          <Grid.Item area="c" backgroundColor={theme.palette.iceBlue}>
            <Block margin="2rem">
              <Route path={`${match.path}/:groupName`} component={Odds} />
              <Route
                exact
                path={match.path}
                render={() => <h3>Please select a page.</h3>}
              />
            </Block>
          </Grid.Item>
          <Grid.Item area="d" backgroundColor={theme.palette.slate}>Footer</Grid.Item>
        </Grid>
      );
    }}
  </Query>
);

export default withTheme(Games);