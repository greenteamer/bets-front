import gql from "graphql-tag";


export const CREATE_BET = gql`
  mutation ($input: CreateBetInput!) {
    createBet(input: $input) {
      id
    }
  }
`;
