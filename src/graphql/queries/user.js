import gql from "graphql-tag";

export const BETS_FRAGMENT = gql`
  fragment UserBets on User {
    bets {
      id
      amount
      team
    }
  }
`;

export const PLAYERS_FRAGMENT = gql`
  fragment UserPlayers on User {
    players {
      id
      agentId
      username
      email
      role
      balance
      available
      atRisk
      ...UserBets
    }
  }
  ${BETS_FRAGMENT}
`;

export const GET_USERS = gql`
  { 
    users {
      id
      username
      email
      role
      balance
      available
      atRisk
      ...UserBets
    }
  }
  ${BETS_FRAGMENT}
`;

export const GET_USER_PLAYERS = gql`
  { 
    me {
      id
      agentId
      username
      email
      role
      balance
      available
      atRisk
      ...UserBets
      ...UserPlayers
    }
  }
  ${PLAYERS_FRAGMENT}
  ${BETS_FRAGMENT}
`;

export const GET_ME = gql`
  {
    me {
      id
      agentId
      username
      email
      role
      balance
      available
      atRisk
      ...UserBets
      ...UserPlayers
    }
  }
  ${PLAYERS_FRAGMENT}
  ${BETS_FRAGMENT}
`;

