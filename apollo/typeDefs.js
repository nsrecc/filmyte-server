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
    logo_path: String # null or string
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
    id: Int!
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

  # People - Get Details
  # GET /person/{person_id} API: https://developers.themoviedb.org/3/people/get-person-details
  type PersonDetails {
    adult: Boolean
    also_known_as: [String]
    biography: String
    birthday: String # or null
    deathday: String # null or string
    gender: Int
    homepage: String # null or string
    id: Int!
    imdb_id: String
    known_for_department: String
    name: String
    place_of_birth: String # or null
    popularity: Float
    profile_path: String # or null
  }

  # Search - Search Movies
  # GET /search/movie API: https://developers.themoviedb.org/3/search/search-movies
  type MoviesSearchResults {
    page: Int
    results: [MovieSearchResult]
    total_pages: Int
    total_results: Int
  }

  type MovieSearchResult { # Movie List Result Object
    adult: Boolean
    backdrop_path: String # or null
    genre_ids: [Int]
    id: Int!
    original_language: String
    original_title: String
    overview: String
    popularity: Float
    poster_path: String # or null
    release_date: String
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int
  }

  # Search - Search TV Shows
  # GET /search/tv API: https://developers.themoviedb.org/3/search/search-tv-shows
  type TvShowsSearchResults {
    page: Int
    results: [TvShowSearchResult]
    total_pages: Int
    total_results: Int
  }

  type TvShowSearchResult { # TV List Result Object
    backdrop_path: String # or null
    first_air_date: String
    genre_ids: [Int]
    id: Int!
    name: String
    origin_country: [String]
    original_language: String
    original_name: String
    overview: String
    popularity: Float
    poster_path: String # or null
    vote_average: Float
    vote_count: Int
  }

  # Search - Search People
  # GET /search/person API: https://developers.themoviedb.org/3/search/search-people
  type PeopleSearchResults {
    page: Int
    results: [PersonSearchResult]
    total_pages: Int
    total_results: Int
  }

  type PersonSearchResult {
    adult: Boolean
    gender: Int
    id: Int!
    known_for: [KnownFor]
    known_for_department: String
    name: String
    popularity: Float
    profile_path: String # or null
  }

  # KnownFor can be either a Movie List Result or TV List Result Object
  union KnownFor = MovieKnownFor | TvShowKnownFor

  type MovieKnownFor { # Movie List Result Object
    adult: Boolean
    backdrop_path: String # or null
    genre_ids: [Int]
    id: Int!
    media_type: String! # required and allowed value: "movie"
    original_language: String
    original_title: String
    overview: String
    poster_path: String # or null
    release_date: String
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int
  }

  type TvShowKnownFor { # TV List Result Object
    backdrop_path: String # or null
    first_air_date: String
    genre_ids: [Int]
    id: Int!
    media_type: String! # required and allowed value: "tv"
    name: String
    origin_country: [String]
    original_language: String
    original_name: String
    overview: String
    poster_path: String # or null
    vote_average: Float
    vote_count: Int
  }

  # --- Queries ---
  type Query {
    configuration: Configuration
    genresByMediaType: GenresByMediaType
    movieDetails(movieId: Int!): MovieDetails
    tvDetails(tvId: Int!): TvDetails
    personDetails(personId: Int!): PersonDetails
    moviesSearch(query: String!, page: Int): MoviesSearchResults
    tvShowsSearch(query: String!, page: Int): TvShowsSearchResults
    peopleSearch(query: String!, page: Int): PeopleSearchResults
  }
`;
