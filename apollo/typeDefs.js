/**
 * --- Type Definitions ---
 * - GraphQL Schema defines the structure of the data for the client to query and mutate.
 * - An exclamation point (!) after a declared field's type means "this field's value can never be
 * null."
 * - If an array has an exclamation point after it, the array cannot be null, but it can be empty.
 */
import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  # Configuration TMDB API: https://developers.themoviedb.org/3/configuration/get-api-configuration
  type Configuration {
    change_keys: [String]
    images: Images
  }

  type Images {
    base_url: String
    secure_base_url: String
    still_sizes: [String]
    profile_sizes: [String]
    poster_sizes: [String]
    logo_sizes: [String]
    backdrop_sizes: [String]
  }

  type Query {
    configuration: Configuration
  }
`;
