import { TMDbAPI } from 'apollo/datasources/tmdbApi';
import qs from 'qs';
import { mockConfigurationResponse } from 'apollo/datasources/__tests__/tmdbMocks/configurationMock';
import {
  mockMovieGenreListResponse,
  mockTvGenreListResponse,
} from 'apollo/datasources/__tests__/tmdbMocks/genreListMock';

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
    it('should call GET /configuration with the correct parameters and response', async () => {
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
    it('should call GET /genre/movie/list with the correct parameters', async () => {
      tmdbAPI.get.mockReturnValue(mockMovieGenreListResponse);
      const queryString = qs.stringify({ api_key: tmdbAPI.apiKey });

      const res = await tmdbAPI.getMovieGenreList();

      expect(res).toEqual(mockMovieGenreListResponse);
      expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
      expect(tmdbAPI.get).toHaveBeenCalledWith(`/genre/movie/list?${queryString}`);
    });
  });

  describe('tmdbAPI getTvGenreList', () => {
    it('should call GET /genre/tv/list with the correct parameters', async () => {
      tmdbAPI.get.mockReturnValue(mockTvGenreListResponse);
      const queryString = qs.stringify({ api_key: tmdbAPI.apiKey });

      const res = await tmdbAPI.getTvGenreList();

      expect(res).toEqual(mockTvGenreListResponse);
      expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
      expect(tmdbAPI.get).toHaveBeenCalledWith(`/genre/tv/list?${queryString}`);
    });
  });
});
