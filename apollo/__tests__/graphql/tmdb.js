// GraphQL queries for testing. Client will use some of these.
import { gql } from 'apollo-server-micro';

export const GET_CONFIGURATION = gql`
  query Configuration {
    configuration {
      change_keys,
      images {
        base_url,
        secure_base_url,
        still_sizes,
        profile_sizes,
        poster_sizes,
        logo_sizes,
        backdrop_sizes,
      }
    }
  }
`;
