import { gql } from 'apollo-server-micro';

/**
 * --- Type Definitions ---
 * - GraphQL Schema defines the structure of the data for the client to query and mutate.
 * - An exclamation point (!) after a declared field's type means "this field's value can never be
 * null."
 * - If an array has an exclamation point after it, the array cannot be null, but it can be empty.
 */
export const typeDefs = gql`
  # --- Enums ---
  enum MediaType {
    MOVIE
    TV
    MOVIE_AND_TV
    PERSON
  }
  
  # --- TMDb APIs ---
  # Configuration API: https://developers.themoviedb.org/3/configuration/get-api-configuration
  type Configuration {
    images: ImageConfig
    change_keys: [String]
  }

  type ImageConfig {
    base_url: String
    secure_base_url: String
    backdrop_sizes: [String]
    logo_sizes: [String]
    poster_sizes: [String]
    profile_sizes: [String]
    still_sizes: [String]
  }

  # Movie/TV Genre List APIs:
  # - movie genre list: https://developers.themoviedb.org/3/genres/get-movie-list
  # - tv genre list: https://developers.themoviedb.org/3/genres/get-tv-list
  type Genre {
    id: Int
    name: String
  }

  type GenresByMediaType {
    movieGenres: [Genre]
    tvGenres: [Genre]
  }

  # --- Queries ---
  type Query {
    configuration: Configuration
    genresByMediaType: GenresByMediaType
  }
`;
