// GraphQL queries for testing. Client will use some of these.
import { gql } from 'apollo-server-micro';

export const GET_CONFIGURATION = gql`
  query Configuration {
    configuration {
      images {
        base_url
        secure_base_url
        backdrop_sizes
        logo_sizes
        poster_sizes
        profile_sizes
        still_sizes
      }
      change_keys
    }
  }
`;

export const GET_GENRES_BY_MEDIA_TYPE = gql`
  query GenresByMediaType {
    genresByMediaType {
      movieGenres {
        id
        name
      }
      tvGenres {
        id
        name
      }
    }
  }
`;
