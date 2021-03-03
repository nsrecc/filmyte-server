/* eslint-disable */
import get from 'lodash/get';

/**
 * Genres - Get Movie List
 * GET /genre/movie/list API: https://developers.themoviedb.org/3/genres/get-movie-list
 *
 * response header 'cache-control': 'public, max-age=21600' --- 6 hours
 */
export const mockMovieGenreListResponse = {
  genres: [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
  ],
};

/**
 * Genres - Get TV List
 * GET /genre/tv/list API: https://developers.themoviedb.org/3/genres/get-tv-list
 *
 * response header 'cache-control': 'public, max-age=21600' --- 6 hours
 */
export const mockTvGenreListResponse = {
  genres: [
    { id: 10759, name: 'Action & Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 10762, name: 'Kids' },
    { id: 9648, name: 'Mystery' },
    { id: 10763, name: 'News' },
    { id: 10764, name: 'Reality' },
    { id: 10765, name: 'Sci-Fi & Fantasy' },
    { id: 10766, name: 'Soap' },
    { id: 10767, name: 'Talk' },
    { id: 10768, name: 'War & Politics' },
    { id: 37, name: 'Western' },
  ],
};

export const mockGenreList401Response = {
  status_code: 7,
  status_message: 'Invalid API key: You must be granted a valid key.',
  success: false,
};

export const mockGenreList404Response = {
  status_code: 34,
  status_message: 'The resource you requested could not be found.',
};

export const mockGenresByMediaTypeObj = {
  movieGenres: get(mockMovieGenreListResponse, 'genres', []),
  tvGenres: get(mockTvGenreListResponse, 'genres', []),
};
