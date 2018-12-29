import React from 'react';
import { styled, Block, withTheme } from 'reakit';
import { palette as p } from 'styled-tools';

import SidebarMenu from '../SidebarMenu';
import { media, Mobile } from '../../utils';


const ContentLayout = ({ theme, children, sidebar }) => { 
  return (
    <React.Fragment>
      {sidebar}
      <ContentWrapper backgroundColor={theme.palette.iceBlue}>
        {children}
      </ContentWrapper>
    </React.Fragment>
  );
}

export default withTheme(ContentLayout);

const Wrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: auto;
  padding: 2rem;
  background-color: ${p('iceBlue')};
`;