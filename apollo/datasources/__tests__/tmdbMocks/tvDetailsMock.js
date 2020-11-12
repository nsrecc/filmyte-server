/* eslint-disable */
/**
 * TV - Get Details
 * GET /tv/{tv_id} API: https://developers.themoviedb.org/3/tv/get-tv-details
 *
 * response header 'cache-control': 'public, max-age=3600' --- 1 hour
 * 
 * below example with tv_id: 82856 - "The Mandalorian"
 */
export const mockTvDetailsResponse = {
  backdrop_path: '/9ijMGlJKqcslswWUzTEwScm82Gs.jpg',
  created_by: [
    {
      id: 15277,
      credit_id: '5bb6f5c39251410dc601d77f',
      name: 'Jon Favreau',
      gender: 2,
      profile_path: '/8MtRRnEHaBSw8Ztdl8saXiw1egP.jpg',
    },
  ],
  episode_run_time: [35, 48],
  first_air_date: '2019-11-12',
  genres: [
    { id: 10765, name: 'Sci-Fi & Fantasy' },
    { id: 10759, name: 'Action & Adventure' },
    { id: 37, name: 'Western' },
  ],
  homepage: 'https://www.disneyplus.com/series/the-mandalorian/3jLIGMDYINqD',
  id: 82856,
  in_production: true,
  languages: ['en'],
  last_air_date: '2020-11-06',
  last_episode_to_air: {
    air_date: '2020-11-06',
    episode_number: 2,
    id: 2464374,
    name: 'Chapter 10: The Passenger',
    overview: 'The Mandalorian must ferry a passenger with precious cargo on a risky journey.',
    production_code: '',
    season_number: 2,
    show_id: 82856,
    still_path: '/kAuS7h8qVLokHcKpSwZMum4PhC2.jpg',
    vote_average: 7.75,
    vote_count: 4,
  },
  name: 'The Mandalorian',
  next_episode_to_air: {
    air_date: '2020-11-13',
    episode_number: 3,
    id: 2464375,
    name: 'Chapter 11',
    overview: 'The Mandalorian braves high seas and meets unexpected allies.',
    production_code: '',
    season_number: 2,
    show_id: 82856,
    still_path: null,
    vote_average: 0.0,
    vote_count: 0,
  },
  networks: [
    {
      name: 'Disney+',
      id: 2739,
      logo_path: '/gJ8VX6JSu3ciXHuC2dDGAo2lvwM.png',
      origin_country: 'US',
    },
  ],
  number_of_episodes: 16,
  number_of_seasons: 2,
  origin_country: ['US'],
  original_language: 'en',
  original_name: 'The Mandalorian',
  overview:
    'After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.',
  popularity: 1199.859,
  poster_path: '/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
  production_companies: [
    {
      id: 1,
      logo_path: '/o86DbpburjxrqAzEDhXZcyE8pDb.png',
      name: 'Lucasfilm Ltd.',
      origin_country: 'US',
    },
    {
      id: 109755,
      logo_path: '/hUCbTgfDPp1sIo8BOI0AaOMx1Si.png',
      name: 'Walt Disney Studios',
      origin_country: 'US',
    },
  ],
  seasons: [
    {
      air_date: '2019-11-12',
      episode_count: 8,
      id: 110346,
      name: 'Season 1',
      overview:
        'A lone gunfighter makes his way through the outer reaches of the galaxy, far from the authority of the New Republic.',
      poster_path: '/o5VDhrGfeMsrtGsBPBTRIakWdJA.jpg',
      season_number: 1,
    },
    {
      air_date: '2020-10-30',
      episode_count: 8,
      id: 153254,
      name: 'Season 2',
      overview:
        'The Mandalorian and the Child continue their journey, facing enemies and rallying allies as they make their way through a dangerous galaxy in the tumultuous era after the collapse of the Galactic Empire.',
      poster_path: '/b8cs9DzhxRQLQ7TvfLihYbAC6fg.jpg',
      season_number: 2,
    },
  ],
  status: 'Returning Series',
  type: 'Scripted',
  vote_average: 8.5,
  vote_count: 2164,
};

export const mockTvDetails401Response = {
  status_code: 7,
  status_message: 'Invalid API key: You must be granted a valid key.',
  success: false,
};

// 404 response with tv_id: 0
export const mockTvDetails404Response = {
  success: false,
  status_code: 34,
  status_message: 'The resource you requested could not be found.',
};
