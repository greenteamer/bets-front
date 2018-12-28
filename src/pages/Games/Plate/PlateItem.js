import React from 'react';
import {
  styled,
  Button,
  Block,
  Grid,
} from 'reakit';
import { palette as p } from 'styled-tools';
import { graphql, withApollo } from 'react-apollo';
import { get } from 'lodash';

import { ButtonForm } from '../../../components/common';
import { CREATE_BET } from '../../../graphql/mutations';
import { GET_ME } from '../../../graphql/queries';


const template = `
  "a b c d e" 40px / 40px 1fr 120px 120px 120px
`;

class PlateItem extends React.Component { 

  handleOnCreateBet = value => {
    const { mutate, client, eventId, siteKey, oddType, oddIndex, team } = this.props;
    const root = client.cache.readQuery({ query: GET_ME });
    const me = get(root, ['me']);
    console.log('>>> handleOnCreateBet props: ', { mutate, client, me });
    if (!me) {
      console.log('>>> Error when getting me from cache');
      return;
    }

    const input = {
      userId: me.id,
      creatorId: me.id,
      amount: parseInt(value, 10),
      eventId,
      siteKey,
      oddType,
      oddIndex,
      team,
    }

    mutate({
      variables: {
        input,
      },
      // update: (cache, { data }) => {
      //   const newPlayer = get(data, ['signUp']);
      //   const root = cache.readQuery({ query: GET_ME })
      //   cache.writeQuery({
      //     query: GET_ME,
      //     data: {
      //       me: {
      //         ...root.me,
      //         players: root.me.players.concat([newPlayer]),
      //       },
      //     },
      //   });
      // }
    }).then(result => {
      const { data: { createBet } } = result;
      console.log('>>>> create bet mutation result: ', { result });
    }).catch(error => {
      console.log('>>>> mutate error: ', { error });
    });
  }

  render() { 
    const { team, h2h, top } = this.props;
    return (
      <MyCard template={template} top={top}>
        <Grid.Item area="a">
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
            onSuccess={this.handleOnCreateBet}
            onCancel={value => console.log('&&& on cancel: ', { value })}
          >
            {h2h}
          </ButtonForm>
        </Grid.Item>
      </MyCard>
    );
  }
}


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
  color: ${p('slate')};
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

export default withApollo(graphql(CREATE_BET)(PlateItem));