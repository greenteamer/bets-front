import React from 'react';
import { styled, Button, Box, Navigation, List, Heading, Hidden, Block } from 'reakit';
import { palette as p, prop } from 'styled-tools';
import { Link } from 'react-router-dom'
import { map } from 'lodash';

// import { Button } from '../../components/common';
import { colors } from '../../theme';
import { media, Mobile } from '../../utils';


const Menu = ({ match, tree }) => {
  return (
    <SidebarWrapper>
      <HeadingS as="h4" color={colors.black}>Games Panel</HeadingS>
      <List>
        {map(Object.keys(tree), item => (
          <Hidden.Container key={item}>
            {hidden => (
              <li>
                <Hidden.Toggle as={MenuButton} {...hidden}>{item}</Hidden.Toggle>
                <HiddenS {...hidden}>
                  {map(tree[item], (obj, index) => (
                    <MenuButton key={index}><LinkS to={obj.url}>{obj.title}</LinkS></MenuButton>
                  ))}
                </HiddenS>
              </li>
            )}
          </Hidden.Container>
        ))}
      </List>
    </SidebarWrapper>
  );
}

export default Menu;

const MenuButton = (props) => (
  <Button display="block" palette="transparent" small {...props} />
)

const SidebarWrapper = styled(Navigation)`
  padding: 1rem;
  flex: 0 0 20vw;
  background-color: ${p('white')};
  /* ${media.desktop`background-color: ${p('primary', -1)}`}
  ${media.tablet`background-color: ${p('primary', -2)}`}
  ${media.mobile`background-color: ${p('secondary', 0)}`} */
`;

const HeadingS = styled(Heading)`
  color: ${p('blackText')};
`;

const LinkS = styled(Link)`
  color: ${p('whiteText')};
  text-decoration: none;
`;

const LinkEmpty = styled.a`
  display: block;
  padding: 0.5rem;
  color: ${p('blackText')};
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const HiddenS = styled(Hidden)`
  padding: 1rem;
`;