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

export const GET_MOVIE_DETAILS = gql`
  query MovieDetails($movieId: Int!) {
    movieDetails(movieId: $movieId) {
      adult
      backdrop_path
      belongs_to_collection
      budget
      genres {
        id
        name
      }
      homepage
      id
      imdb_id
      original_language
      original_title
      overview
      popularity
      poster_path
      production_countries {
        iso_3166_1
        name
      }
      production_companies {
        id
        logo_path
        name
        origin_country
      }
      release_date
      revenue
      runtime
      spoken_languages {
        iso_639_1
        name
      }
      status
      tagline
      title
      video
      vote_average
      vote_count
    }
  }
`;
