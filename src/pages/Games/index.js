import React from 'react';
import { Link, Route } from 'react-router-dom'
import { Query } from 'react-apollo';
import { get, groupBy, map } from 'lodash';
import { Block, Flex, Grid, withTheme } from 'reakit';
import Slider from 'react-styled-carousel';


import { GET_SPORTS } from '../../graphql/queries';
import Odds from './Odds';
import SidebarMenu from '../../components/SidebarMenu';
import ContentLayout from '../../components/Layouts/ContentLayout';


const Games = ({ match }) => (
  <Query query={GET_SPORTS}>
    {({ loading, client, data }) => { 
      const sports = get(data, ['sports']);
      const mapSports = map(sports, s => ({ group: s.group, title: s.title, url: `/games/${s.key}` }));
      const tree = groupBy(mapSports, 'group');
      return (
        <ContentLayout
          sidebar={<SidebarMenu match={match} tree={tree} />}
        >
          <Route path={`${match.path}/:groupName`} component={Odds} />
          <Route
            exact
            path={match.path}
            render={() => <h3>Please select a page.</h3>}
          />
        </ContentLayout>
      );
    }}
  </Query>
);

export default Games;