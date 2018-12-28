import React from 'react';
import {
  styled,
  Button,
  Block,
  Grid,
} from 'reakit';
import { get } from 'lodash';
import { palette as p } from 'styled-tools';
import { withApollo, graphql } from 'react-apollo';

import { ButtonForm } from '../../components/common';
import { UPDATE_AVAILABLE } from '../../graphql/mutations';
import { GET_ME } from '../../graphql/queries';


const template = `
  "a b c d e" 40px / 1fr 1fr 120px 120px 120px
`;

class PlayerItem extends React.Component { 

  handleOnUpdateAvailable = value => {
    const { id, mutate, client } = this.props;
    const input = {
      value: parseInt(value, 10),
      userId: id,
    }
    mutate({
      variables: {
        input,
      },
    }).then(result => {
      console.log('>>>> update available result: ', { result });
    }).catch(error => {
      console.log('>>>> mutate error: ', { error });
    });
  }

  render() { 
    const { id, username, email, balance, available, atRisk } = this.props;
    return (
      <MyCard template={template}>
        <Grid.Item area="a">
          <MyTitle>{username}</MyTitle>
        </Grid.Item>
        <Grid.Item area="b">
          <MyTitle>{email}</MyTitle>
        </Grid.Item>
        <Grid.Item area="c">
          <MyButton>{balance}</MyButton>
        </Grid.Item>
        <Grid.Item area="d">
          <ButtonForm
            placeholder="0"
            onSuccess={this.handleOnUpdateAvailable}
            onCancel={value => console.log('&&& on cancel: ', { value })}
          >
            {available}
          </ButtonForm>
        </Grid.Item>
        <Grid.Item area="e">
          <MyButton>{atRisk}</MyButton>
        </Grid.Item>
      </MyCard>
    );
  }
 }


const MyCard = styled(Grid)`
  align-items: center;
  background-color: ${p('white')};
  border-radius: 0.5rem;
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

const MyButton = styled(Button)`
  width: 100%;
  background-color: ${p('white')};
  color: ${p('black')};
  &:active {
    box-shadow: inset 0 0 999em rgba(0,0,0,0.15);
  }
`;

export default withApollo(graphql(UPDATE_AVAILABLE)(PlayerItem));