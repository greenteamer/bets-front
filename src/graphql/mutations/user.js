import gql from "graphql-tag";


export const SIGN_IN = gql`
  mutation ($username: String!, $password: String!) {
    signIn(login: $username, password: $password) {
      token
      me {
        id
        username
        email
        role
      }
    }
  }
`;
