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

export const GET_TV_DETAILS = gql`
  query TvDetails($tvId: Int!) {
    tvDetails(tvId: $tvId) {
      backdrop_path
      created_by {
        id
        credit_id
        name
        gender
        profile_path
      }
      episode_run_time
      first_air_date
      genres {
        id
        name
      }
      homepage
      id
      in_production
      languages
      last_air_date
      last_episode_to_air {
        air_date
        episode_number
        id
        name
        overview
        production_code
        season_number
        show_id
        still_path
        vote_average
        vote_count
      }
      name
      next_episode_to_air {
        air_date
        episode_number
        id
        name
        overview
        production_code
        season_number
        show_id
        still_path
        vote_average
        vote_count
      }
      networks {
        name
        id
        logo_path
        origin_country
      }
      number_of_episodes
      number_of_seasons
      origin_country
      original_language
      original_name
      overview
      popularity
      poster_path
      production_companies{
        id
        logo_path
        name
        origin_country
      }
      seasons {
        air_date
        episode_count
        id
        name
        overview
        poster_path
        season_number
      }
      status
      type
      vote_average
      vote_count
    }
  }
`;
