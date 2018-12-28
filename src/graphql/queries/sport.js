import gql from "graphql-tag";


export const GET_SPORTS = gql`
  {
    sports {
      id
      key
      active
      group
      details
      title
    }
  }
`;
