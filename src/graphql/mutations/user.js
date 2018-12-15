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
        players {
          id
          email
          username
          role
        }
      }
    }
  }
`;


export const SIGN_UP = gql`
  mutation ($username: String!, $email: String!, $password: String!, $role: String!) {
    signUp(username: $username, email: $email, password: $password, role: $role) {
      id
      username
      email
      role
    }
  }
`;
