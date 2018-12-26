import React from 'react';
import { Link, Route } from 'react-router-dom'
import { Block, Flex, Grid, withTheme } from 'reakit';

import SidebarMenu from '../../components/SidebarMenu';
import List from './List';
import ContentLayout from '../../components/Layouts/ContentLayout';

const template = `
  "b c c" minmax(200px, 1fr)
  "d d d" 100px / 1fr 2fr 2fr
`;

const tree = {
  users: [
    {
      title: 'list',
      url: '/admin/users',
    },
  ],
}

const Agent = ({ match }) => (
  <ContentLayout
    sidebar={<SidebarMenu match={match} tree={tree} />}
  >
    <Route path={`${match.path}/users`} component={List} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a page.</h3>}
    />
  </ContentLayout>
);

export default Agent;