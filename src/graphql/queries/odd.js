import gql from "graphql-tag";


export const GET_ODDS = gql`
  query ($sport_key:String!) {
    odds(sport_key:$sport_key) {
      sport_key
      sport_nice
      teams
      commence_time
      home_team
      sites {
        site_key
        site_nice
        last_update
        odds {
          h2h
        }
      }
    }
  }
`;
