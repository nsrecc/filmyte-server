import { TMDbAPI } from 'apollo/datasources/tmdbApi';
import qs from 'qs';
import { mockConfigurationResponse } from 'apollo/datasources/__tests__/tmdbMocks/configurationMock';
import {
  mockMovieGenreListResponse,
  mockTvGenreListResponse,
} from 'apollo/datasources/__tests__/tmdbMocks/genreListMock';
import { mockMovieDetailsResponse } from 'apollo/datasources/__tests__/tmdbMocks/movieDetailsMock';
import { mockTvDetailsResponse } from 'apollo/datasources/__tests__/tmdbMocks/tvDetailsMock';
import { mockPersonDetailsResponse } from 'apollo/datasources/__tests__/tmdbMocks/personDetailsMock';
import { mockSearchMoviesResponse } from 'apollo/datasources/__tests__/tmdbMocks/searchMoviesMock';
import { mockSearchTvShowsResponse } from 'apollo/datasources/__tests__/tmdbMocks/searchTvShowsMock';
import { mockSearchPeopleResponse } from 'apollo/datasources/__tests__/tmdbMocks/searchPeopleMock';

/**
 * --- TMDbAPI Datasource Tests ---
 *
 * More information: https://www.apollographql.com/docs/apollo-server/testing/testing/
 */
const tmdbAPI = new TMDbAPI();
tmdbAPI.apiKey = 'testApiKey';
// mock tmdbAPI get function and give it a name for reference
tmdbAPI.get = jest.fn().mockName('tmdbAPI.get');

describe('TMDbAPI datasource tests', () => {
  // after each test, clear the calls and instances of all mocks
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('tmdbAPI getConfiguration', () => {
    it('should call GET /configuration with the expected argument and response', async () => {
      // return mock response when mock function is called
      tmdbAPI.get.mockReturnValue(mockConfigurationResponse);
      const queryString = qs.stringify({ api_key: tmdbAPI.apiKey });

      // invoke datasource fetching
      const res = await tmdbAPI.getConfiguration();

      // make sure the datasource fetch was called properly
      expect(res).toEqual(mockConfigurationResponse);
      expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
      expect(tmdbAPI.get).toHaveBeenCalledWith(`/configuration?${queryString}`);
    });
  });

  describe('tmdbAPI getMovieGenreList', () => {
    it('should call GET /genre/movie/list with the expected argument and response', async () => {
      tmdbAPI.get.mockReturnValue(mockMovieGenreListResponse);
      const queryString = qs.stringify({ api_key: tmdbAPI.apiKey });

      const res = await tmdbAPI.getMovieGenreList();

      expect(res).toEqual(mockMovieGenreListResponse);
      expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
      expect(tmdbAPI.get).toHaveBeenCalledWith(`/genre/movie/list?${queryString}`);
    });
  });

  describe('tmdbAPI getTvGenreList', () => {
    it('should call GET /genre/tv/list with the expected argument and response', async () => {
      tmdbAPI.get.mockReturnValue(mockTvGenreListResponse);
      const queryString = qs.stringify({ api_key: tmdbAPI.apiKey });

      const res = await tmdbAPI.getTvGenreList();

      expect(res).toEqual(mockTvGenreListResponse);
      expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
      expect(tmdbAPI.get).toHaveBeenCalledWith(`/genre/tv/list?${queryString}`);
    });
  });

  describe('tmdbAPI getMovieDetails', () => {
    it('should call GET /movie/{movie_id} with the expected argument and response', async () => {
      tmdbAPI.get.mockReturnValue(mockMovieDetailsResponse);
      const queryString = qs.stringify({ api_key: tmdbAPI.apiKey });
      const { id: movieId } = mockMovieDetailsResponse;

      const res = await tmdbAPI.getMovieDetails(movieId);

      expect(res).toEqual(mockMovieDetailsResponse);
      expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
      expect(tmdbAPI.get).toHaveBeenCalledWith(`/movie/${movieId}?${queryString}`);
    });
  });

  describe('tmdbAPI getTvDetails', () => {
    it('should call GET /tv/{tv_id} with the expected argument and response', async () => {
      tmdbAPI.get.mockReturnValue(mockTvDetailsResponse);
      const queryString = qs.stringify({ api_key: tmdbAPI.apiKey });
      const { id: tvId } = mockTvDetailsResponse;

      const res = await tmdbAPI.getTvDetails(tvId);

      expect(res).toEqual(mockTvDetailsResponse);
      expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
      expect(tmdbAPI.get).toHaveBeenCalledWith(`/tv/${tvId}?${queryString}`);
    });
  });

  describe('tmdbAPI getPersonDetails', () => {
    it('should call GET /person/{person_id} with the expected argument and response', async () => {
      tmdbAPI.get.mockReturnValue(mockPersonDetailsResponse);
      const queryString = qs.stringify({ api_key: tmdbAPI.apiKey });
      const { id: personId } = mockPersonDetailsResponse;

      const res = await tmdbAPI.getPersonDetails(personId);

      expect(res).toEqual(mockPersonDetailsResponse);
      expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
      expect(tmdbAPI.get).toHaveBeenCalledWith(`/person/${personId}?${queryString}`);
    });
  });

  describe('tmdbAPI searchMovies', () => {
    it('should call GET /search/movie with the expected argument and response', async () => {
      tmdbAPI.get.mockReturnValue(mockSearchMoviesResponse);
      const query = 'fox';
      const page = 1;
      const queryString = qs.stringify({ api_key: tmdbAPI.apiKey, query, page });

      const res = await tmdbAPI.searchMovies(query, page);

      expect(res).toEqual(mockSearchMoviesResponse);
      expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
      expect(tmdbAPI.get).toHaveBeenCalledWith(`/search/movie?${queryString}`);
    });

    it('should call GET /search/movie with no page argument for default page 1 response case',
      async () => {
        tmdbAPI.get.mockReturnValue(mockSearchMoviesResponse);
        const query = 'fox';
        const queryString = qs.stringify({ api_key: tmdbAPI.apiKey, query, page: 1 });

        const res = await tmdbAPI.searchMovies(query);

        expect(res).toEqual(mockSearchMoviesResponse);
        expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
        expect(tmdbAPI.get).toHaveBeenCalledWith(`/search/movie?${queryString}`);
      });
  });

  describe('tmdbAPI searchTvShows', () => {
    it('should call GET /search/tv with the expected argument and response', async () => {
      tmdbAPI.get.mockReturnValue(mockSearchTvShowsResponse);
      const query = 'fox';
      const page = 1;
      const queryString = qs.stringify({ api_key: tmdbAPI.apiKey, query, page });

      const res = await tmdbAPI.searchTvShows(query, page);

      expect(res).toEqual(mockSearchTvShowsResponse);
      expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
      expect(tmdbAPI.get).toHaveBeenCalledWith(`/search/tv?${queryString}`);
    });

    it('should call GET /search/tv with no page argument for default page 1 response case',
      async () => {
        tmdbAPI.get.mockReturnValue(mockSearchTvShowsResponse);
        const query = 'fox';
        const queryString = qs.stringify({ api_key: tmdbAPI.apiKey, query, page: 1 });

        const res = await tmdbAPI.searchTvShows(query);

        expect(res).toEqual(mockSearchTvShowsResponse);
        expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
        expect(tmdbAPI.get).toHaveBeenCalledWith(`/search/tv?${queryString}`);
      });
  });

  describe('tmdbAPI searchPeople', () => {
    it('should call GET /search/person with the expected argument and response', async () => {
      tmdbAPI.get.mockReturnValue(mockSearchPeopleResponse);
      const query = 'fox';
      const page = 1;
      const queryString = qs.stringify({ api_key: tmdbAPI.apiKey, query, page });

      const res = await tmdbAPI.searchPeople(query, page);

      expect(res).toEqual(mockSearchPeopleResponse);
      expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
      expect(tmdbAPI.get).toHaveBeenCalledWith(`/search/person?${queryString}`);
    });

    it('should call GET /search/person with no page argument for default page 1 response case',
      async () => {
        tmdbAPI.get.mockReturnValue(mockSearchPeopleResponse);
        const query = 'fox';
        const queryString = qs.stringify({ api_key: tmdbAPI.apiKey, query, page: 1 });

        const res = await tmdbAPI.searchPeople(query);

        expect(res).toEqual(mockSearchPeopleResponse);
        expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
        expect(tmdbAPI.get).toHaveBeenCalledWith(`/search/person?${queryString}`);
      });
  });
});
