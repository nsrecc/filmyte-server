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
  # Configuration - Get Configuration
  # GET /configuration API: https://developers.themoviedb.org/3/configuration/get-api-configuration
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

  # Genres - Get Movie/TV List
  # GET /genre/movie/list API: https://developers.themoviedb.org/3/genres/get-tv-list
  # GET /genre/tv/list API: https://developers.themoviedb.org/3/genres/get-tv-list
  type GenresByMediaType {
    movieGenres: [Genre]
    tvGenres: [Genre]
  }
  
  type Genre {
    id: Int!
    name: String
  }

  # Movie - Get Movie Details
  # GET /movie/{movie_id} API: https://developers.themoviedb.org/3/movies/get-movie-details
  type MovieDetails {
    adult: Boolean
    backdrop_path: String # or null
    belongs_to_collection: String # null or object
    budget: Int
    genres: [Genre]
    homepage: String # or null
    id: Int!
    imdb_id: String # or null
    original_language: String
    original_title: String
    overview: String # or null
    popularity: Float
    poster_path: String # or null
    production_countries: [ProductionCountry]
    production_companies: [ProductionCompany]
    release_date: String
    revenue: Int
    runtime: Int # or null
    spoken_languages: [SpokenLanguage]
    status: String
    tagline: String # or null
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int
  }

  type ProductionCountry {
    iso_3166_1: String
    name: String
  }

  type ProductionCompany {
    id: Int!
    logo_path: String # or null
    name: String
    origin_country: String
  }
  
  type SpokenLanguage {
    iso_639_1: String
    name: String
  }

  # TV - Get Details
  # GET /tv/{tv_id} API: https://developers.themoviedb.org/3/tv/get-tv-details
  type TvDetails {
    backdrop_path: String # or null
    created_by: [CreatedBy]
    episode_run_time: [Int]
    first_air_date: String
    genres: [Genre]
    homepage: String
    id: Int
    in_production: Boolean
    languages: [String]
    last_air_date: String
    last_episode_to_air: EpisodeToAir
    name: String
    next_episode_to_air: EpisodeToAir
    networks: [Network]
    number_of_episodes: Int
    number_of_seasons: Int
    origin_country: [String]
    original_language: String
    original_name: String
    overview: String
    popularity: Float
    poster_path: String
    production_companies: [ProductionCompany]
    seasons: [Season]
    status: String
    type: String
    vote_average: Float
    vote_count: Int
  }

  type CreatedBy {
    id: Int!
    credit_id: String
    name: String
    gender: Int
    profile_path: String
  }

  type EpisodeToAir {
    air_date: String
    episode_number: Int
    id: Int!
    name: String
    overview: String
    production_code: String
    season_number: Int
    show_id: Int
    still_path: String
    vote_average: Float
    vote_count: Int
  }

  type Network {
    name: String
    id: Int!
    logo_path: String
    origin_country: String
  }

  type Season {
    air_date: String
    episode_count: Int
    id: Int!
    name: String
    overview: String
    poster_path: String
    season_number: Int
  }

  # --- Queries ---
  type Query {
    configuration: Configuration
    genresByMediaType: GenresByMediaType
    movieDetails(movieId: Int!): MovieDetails
    tvDetails(tvId: Int!): TvDetails
  }
`;
