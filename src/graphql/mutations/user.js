import gql from "graphql-tag";


export const SIGN_IN = gql`
  mutation ($username: String!, $password: String!) {
    signIn(login: $username, password: $password) {
      token
      me {
        id
        agentId
        username
        email
        role
        players {
          id
          agentId
          email
          username
          role
        }
      }
    }
  }
`;


export const SIGN_UP = gql`
  mutation ($username: String!, $email: String!, $password: String!, $role: String!, $agentId: ID) {
    signUp(username: $username, email: $email, password: $password, role: $role, agentId: $agentId) {
      id
      username
      email
      role
      agentId
    }
  }
`;

export const UPDATE_AVAILABLE = gql`
  mutation ($input: UpdateAvailableInput!) {
    updateAvailable(input: $input) {
      id
      available
    }
  }
`;
