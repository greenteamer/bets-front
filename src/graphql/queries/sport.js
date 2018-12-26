import gql from "graphql-tag";


export const GET_SPORTS = gql`
  {
    sports {
      key
      active
      group
      details
      title
    }
  }
`;
