/* eslint-disable */
/**
 * Movies - Get Details
 * GET /movie/{movie_id} API: https://developers.themoviedb.org/3/movies/get-movie-details
 *
 * response header 'cache-control': 'public, max-age=21600' --- 6 hours
 * 
 * below example with movie_id: 157336 - "Interstellar"
 */
export const mockMovieDetailsResponse = {
  adult: false,
  backdrop_path: '/xJHokMbljvjADYdit5fK5VQsXEG.jpg',
  belongs_to_collection: null,
  budget: 165000000,
  genres: [
    { id: 12, name: 'Adventure' },
    { id: 18, name: 'Drama' },
    { id: 878, name: 'Science Fiction' },
  ],
  homepage: 'http://www.interstellarmovie.net/',
  id: 157336,
  imdb_id: 'tt0816692',
  original_language: 'en',
  original_title: 'Interstellar',
  overview:
    'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
  popularity: 92.332,
  poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
  production_companies: [
    {
      id: 923,
      logo_path: '/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png',
      name: 'Legendary Pictures',
      origin_country: 'US',
    },
    {
      id: 9996,
      logo_path: '/3tvBqYsBhxWeHlu62SIJ1el93O7.png',
      name: 'Syncopy',
      origin_country: 'GB',
    },
    { id: 13769, logo_path: null, name: 'Lynda Obst Productions', origin_country: '' },
  ],
  production_countries: [
    { iso_3166_1: 'GB', name: 'United Kingdom' },
    { iso_3166_1: 'US', name: 'United States of America' },
  ],
  release_date: '2014-11-05',
  revenue: 675120017,
  runtime: 169,
  spoken_languages: [{ iso_639_1: 'en', name: 'English' }],
  status: 'Released',
  tagline: 'Mankind was born on Earth. It was never meant to die here.',
  title: 'Interstellar',
  video: false,
  vote_average: 8.3,
  vote_count: 24079,
};

export const mockMovieDetails401Response = {
  status_code: 7,
  status_message: 'Invalid API key: You must be granted a valid key.',
  success: false,
};

// 404 response with movie_id: 0
export const mockMovieDetails404Response = {
  success: false,
  status_code: 34,
  status_message: 'The resource you requested could not be found.',
};
