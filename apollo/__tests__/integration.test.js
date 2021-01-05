import { createTestClient } from 'apollo-server-testing';
import { createTestServer } from 'apollo/__tests__/utils';
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
import {
  GET_CONFIGURATION,
  GET_GENRES_BY_MEDIA_TYPE,
  GET_MOVIE_DETAILS,
  GET_TV_DETAILS,
  GET_PERSON_DETAILS,
  GET_MOVIES_SEARCH,
  GET_TV_SHOWS_SEARCH,
  GET_PEOPLE_SEARCH,
} from 'apollo/__tests__/graphql/tmdb';

/**
 * --- Apollo Server Integration Tests ---
 *
 * Integration tests for testing the APIs as a black box. The scope of integration tests is to
 * receive a graphql query, and mock-fetch the data for the query using the correct datasource API.
 *
 * More information: https://www.apollographql.com/docs/apollo-server/testing/testing/
 */
describe('apollo server integration tests', () => {
  // after each test, clear the calls and instances of all mocks
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Query GET_CONFIGURATION', () => {
    it('should query configuration and return expected result', async () => {
      // create instance of test server which uses existing typeDefs, resolvers, and datasource APIs
      const { server, tmdbAPI } = createTestServer();
      // mock tmdbAPI get function with mock response and give it a name for reference
      tmdbAPI.get = jest.fn().mockName('tmdbAPI.get');
      tmdbAPI.get.mockReturnValue(mockConfigurationResponse);

      // use the test server to create a query function
      const { query } = createTestClient(server);
      // run query against the server and snapshot the output
      const res = await query({ query: GET_CONFIGURATION });

      expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
      expect(res).toMatchSnapshot();
    });
  });

  describe('Query GET_GENRES_BY_MEDIA_TYPE', () => {
    it('should query genres by media type and return expected result', async () => {
      const { server, tmdbAPI } = createTestServer();
      tmdbAPI.get = jest.fn().mockName('tmdbAPI.get');
      tmdbAPI.get.mockReturnValueOnce(mockMovieGenreListResponse);
      tmdbAPI.get.mockReturnValueOnce(mockTvGenreListResponse);

      const { query } = createTestClient(server);
      const res = await query({ query: GET_GENRES_BY_MEDIA_TYPE });

      expect(tmdbAPI.get).toHaveBeenCalledTimes(2);
      expect(res).toMatchSnapshot();
    });
  });

  describe('Query GET_MOVIE_DETAILS', () => {
    it('should query movie details by id and return expected result', async () => {
      const { server, tmdbAPI } = createTestServer();
      tmdbAPI.get = jest.fn().mockName('tmdbAPI.get');
      tmdbAPI.get.mockReturnValue(mockMovieDetailsResponse);
      const { id: movieId } = mockMovieDetailsResponse;

      const { query } = createTestClient(server);
      const res = await query({ query: GET_MOVIE_DETAILS, variables: { movieId } });

      expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
      expect(res).toMatchSnapshot();
    });
  });

  describe('Query GET_TV_DETAILS', () => {
    it('should query tv details by id and return expected result', async () => {
      const { server, tmdbAPI } = createTestServer();
      tmdbAPI.get = jest.fn().mockName('tmdbAPI.get');
      tmdbAPI.get.mockReturnValue(mockTvDetailsResponse);
      const { id: tvId } = mockTvDetailsResponse;

      const { query } = createTestClient(server);
      const res = await query({ query: GET_TV_DETAILS, variables: { tvId } });

      expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
      expect(res).toMatchSnapshot();
    });
  });

  describe('Query GET_PERSON_DETAILS', () => {
    it('should query person details by id and return expected result', async () => {
      const { server, tmdbAPI } = createTestServer();
      tmdbAPI.get = jest.fn().mockName('tmdbAPI.get');
      tmdbAPI.get.mockReturnValue(mockPersonDetailsResponse);
      const { id: personId } = mockPersonDetailsResponse;

      const { query } = createTestClient(server);
      const res = await query({ query: GET_PERSON_DETAILS, variables: { personId } });

      expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
      expect(res).toMatchSnapshot();
    });
  });

  describe('Query GET_MOVIES_SEARCH', () => {
    it('should query movies search by query, page and return expected result', async () => {
      const { server, tmdbAPI } = createTestServer();
      tmdbAPI.get = jest.fn().mockName('tmdbAPI.get');
      tmdbAPI.get.mockReturnValue(mockSearchMoviesResponse);
      const { query: searchQuery = 'fox', page } = mockSearchMoviesResponse;

      const { query } = createTestClient(server);
      const res = await query({
        query: GET_MOVIES_SEARCH,
        variables: { query: searchQuery, page },
      });

      expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
      expect(res).toMatchSnapshot();
    });
  });

  describe('Query GET_TV_SHOWS_SEARCH', () => {
    it('should query tv shows search by query, page and return expected result', async () => {
      const { server, tmdbAPI } = createTestServer();
      tmdbAPI.get = jest.fn().mockName('tmdbAPI.get');
      tmdbAPI.get.mockReturnValue(mockSearchTvShowsResponse);
      const { query: searchQuery = 'fox', page } = mockSearchTvShowsResponse;

      const { query } = createTestClient(server);
      const res = await query({
        query: GET_TV_SHOWS_SEARCH,
        variables: { query: searchQuery, page },
      });

      expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
      expect(res).toMatchSnapshot();
    });
  });

  describe('Query GET_PEOPLE_SEARCH', () => {
    it('should query people search by query, page and return expected result', async () => {
      const { server, tmdbAPI } = createTestServer();
      tmdbAPI.get = jest.fn().mockName('tmdbAPI.get');
      tmdbAPI.get.mockReturnValue(mockSearchPeopleResponse);
      const { query: searchQuery = 'fox', page } = mockSearchPeopleResponse;

      const { query } = createTestClient(server);
      const res = await query({
        query: GET_PEOPLE_SEARCH,
        variables: { query: searchQuery, page },
      });

      expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
      expect(res).toMatchSnapshot();
    });
  });
});
