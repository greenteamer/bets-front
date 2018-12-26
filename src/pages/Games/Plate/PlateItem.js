import React from 'react';
import {
  styled,
  Button,
  Block,
  Grid,
} from 'reakit';
import { palette as p } from 'styled-tools';

import { ButtonForm } from '../../../components/common';


const template = `
  "a b c d e" 40px / 40px 1fr 120px 120px 120px
`;

const PlateItem = ({ team, h2h, top }) => (
  <MyCard template={template} top={top}>
    <Grid.Item area="a">
      {/* <MyImage
        src="//ssl.gstatic.com/onebox/media/sports/logos/ofjScRGiytT__Flak2j4dg_48x48.png"
        width={40}
        height={40}
        top={top}
      /> */}
      <Logo>Logo</Logo>
    </Grid.Item>
    <Grid.Item area="b">
      <MyTitle>{team}</MyTitle>
    </Grid.Item>
    <Grid.Item area="c">
      <MyButton>{0}</MyButton>
    </Grid.Item>
    <Grid.Item area="d">
      <MyButton>{0}</MyButton>
    </Grid.Item>
    <Grid.Item area="e">
      <ButtonForm
        onSuccess={value => console.log('&&& on create: ', { value })}
        onCancel={value => console.log('&&& on cancel: ', { value })}
      >
        {h2h}
      </ButtonForm>
    </Grid.Item>
  </MyCard>
);


const MyCard = styled(Grid)`
  align-items: center;
  background-color: ${p('white')};
  border-top-left-radius: ${props => props.top ? '0.5rem' : 0};
  border-top-right-radius: ${props => props.top ? '0.5rem' : 0};
  border-bottom-left-radius: ${props => props.top ? 0 : '0.5rem'};
  border-bottom-right-radius: ${props => props.top ? 0 : '0.5rem'};
  &:hover {
    box-shadow: 0 0 1px rgba(0,0,0,0.5); 
  }
`;

const MyTitle = styled.div`
  margin-left: 1rem;
`;

const Logo = styled.div`
  font-size: 1.25rem;
  padding: 1rem;
  color: ${p('slate')}
`;

const MyImage = styled.img`
  border-top-left-radius: ${props => props.top ? '0.5rem' : 0};
  border-bottom-left-radius: ${props => props.top ? 0 : '0.5rem'};
`;

const MyButton = styled(Button)`
  width: 100%;
  background-color: ${p('white')};
  color: ${p('black')};
  &:active {
    box-shadow: inset 0 0 999em rgba(0,0,0,0.15);
  }
`;

export default PlateItem;