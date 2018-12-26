import React from 'react';
import { Block, Flex, Grid, withTheme } from 'reakit';

import SidebarMenu from '../SidebarMenu';


const ContentLayout = ({ theme, children, sidebar }) => { 
  const template = generateTemplate(sidebar);
  return (
    <Grid template={template}>
      {sidebar &&
        <Grid.Item area="b" backgroundColor={theme.palette.slate}>
          {sidebar}
        </Grid.Item>
      }
      <Grid.Item area="c" backgroundColor={theme.palette.iceBlue}>
        <Block margin="2rem">
          {children}
        </Block>
      </Grid.Item>
    </Grid>
  );
}

export default withTheme(ContentLayout);

const generateTemplate = sidebar => {
  if (sidebar) return `
    "b c c" auto / 1fr 2fr 2fr
  `;
  return `
    "c c c" auto / 1fr 2fr 2fr
  `;
}