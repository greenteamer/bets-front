import gql from "graphql-tag";

export const PLAYERS_FRAGMENT = gql`
  fragment UserPlayers on User {
    players {
      id
      username
      email
      role
    }
  }
`;

export const GET_USER_PLAYERS = gql`
  { 
    me {
      id
      ...UserPlayers
    }
  }
  ${PLAYERS_FRAGMENT}
`;

export const GET_ME = gql`
  {
    me {
      id
      username
      email
      role
      ...UserPlayers
    }
  }
  ${PLAYERS_FRAGMENT}
`;

