import React from 'react';
import { styled, Button, Box, Navigation, List, Heading, Hidden, Block } from 'reakit';
import { palette as p, prop } from 'styled-tools';
import { Link } from 'react-router-dom'
import { map } from 'lodash';


const Menu = ({ match, tree }) => {
  return (
    <Box>
      <NavigationS>
        <HeadingS as="h4">Games Panel</HeadingS>
        <List>
          {map(Object.keys(tree), item => (
            <Hidden.Container key={item}>
              {hidden => (
                <li>
                  <Hidden.Toggle as={ButtonS} {...hidden}>{item}</Hidden.Toggle>
                  <HiddenS {...hidden}>
                    {map(tree[item], sport => (
                      <ButtonS key={sport.key}><LinkS to={`${match.path}/${sport.key}`}>{sport.title}</LinkS></ButtonS>
                    ))}
                  </HiddenS>
                </li>
              )}
            </Hidden.Container>
          ))}
        </List>
      </NavigationS>
    </Box>
  );
}

export default Menu;

const NavigationS = styled(Navigation)`
  /* width: 25rem; */
  background-color: ${p('primary', 0)};
  padding: 1rem;
`;

const ButtonS = styled(Button)`
  display: block;
  text-align: left;
  width: 100%;
  height: 3rem;
  line-height: 3rem;
`;

const HeadingS = styled(Heading)`
  color: ${p('blackText')};
`;

const LinkS = styled(Link)`
  color: ${p('blackText')};
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