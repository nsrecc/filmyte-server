import { resolvers } from 'apollo/resolvers';
import { mockConfigurationResponse } from 'apollo/datasources/__tests__/tmdbMocks/configurationMock';
import {
  mockMovieGenreListResponse,
  mockTvGenreListResponse,
  mockGenreByMediaTypeObj,
} from 'apollo/datasources/__tests__/tmdbMocks/genreListMock';
import { mockMovieDetailsResponse } from 'apollo/datasources/__tests__/tmdbMocks/movieDetailsMock';
import { mockTvDetailsResponse } from 'apollo/datasources/__tests__/tmdbMocks/tvDetailsMock';
import { mockPersonDetailsResponse } from 'apollo/datasources/__tests__/tmdbMocks/personDetailsMock';
import { mockSearchMoviesResponse } from 'apollo/datasources/__tests__/tmdbMocks/searchMoviesMock';
import { mockSearchTvShowsResponse } from 'apollo/datasources/__tests__/tmdbMocks/searchTvShowsMock';
import {
  mockSearchPeopleResponse,
  mockSearchPeopleKnownForItem,
} from 'apollo/datasources/__tests__/tmdbMocks/searchPeopleMock';

/**
 * --- Apollo Server Resolvers Tests ---
 */
describe('apollo server resolvers tests', () => {
  // after each test, clear the calls and instances of all mocks
  afterEach(() => {
    jest.clearAllMocks();
  });

  // create mockContext with mocked datasource fetcher to be passed to resolver
  const mockContext = {
    dataSources: {
      tmdbAPI: {
        getConfiguration: jest.fn().mockName('tmdbAPI.getConfiguration'),
        getMovieGenreList: jest.fn().mockName('tmdbAPI.getMovieGenreList'),
        getTvGenreList: jest.fn().mockName('tmdbAPI.getTvGenreList'),
        getMovieDetails: jest.fn().mockName('tmdbAPI.getMovieDetails'),
        getTvDetails: jest.fn().mockName('tmdbAPI.getTvDetails'),
        getPersonDetails: jest.fn().mockName('tmdbAPI.getPersonDetails'),
        searchMovies: jest.fn().mockName('tmdbAPI.searchMovies'),
        searchTvShows: jest.fn().mockName('tmdbAPI.searchTvShows'),
        searchPeople: jest.fn().mockName('tmdbAPI.searchPeople'),
      },
    },
  };

  describe('resolveType in KnownFor resolver', () => {
    it('should resolve type of known media type in movie items', async () => {
      const { movieKnownFor } = mockSearchPeopleKnownForItem;
      const resolvedType = resolvers.KnownFor.__resolveType(movieKnownFor);
      expect(resolvedType).toEqual('MovieKnownFor');
    });

    it('should resolve type of known media type for tv items', async () => {
      const { tvShowKnownFor } = mockSearchPeopleKnownForItem;
      const resolvedType = resolvers.KnownFor.__resolveType(tvShowKnownFor);
      expect(resolvedType).toEqual('TvShowKnownFor');
    });

    it('should return null for no media type in items', async () => {
      const resolvedType = resolvers.KnownFor.__resolveType({ test: 'test' });
      expect(resolvedType).toBeNull();
    });
  });

  describe('query configuration resolver', () => {
    it('should call tmdbAPI getConfiguration and return expected result', async () => {
      // setup mock response
      const { getConfiguration } = mockContext.dataSources.tmdbAPI;
      getConfiguration.mockReturnValue(mockConfigurationResponse);

      // call the resolver
      const res = await resolvers.Query.configuration(null, null, mockContext);

      // make sure the datasource fetch was called properly
      expect(res).toEqual(mockConfigurationResponse);
      expect(getConfiguration).toHaveBeenCalledTimes(1);
    });
  });

  describe('query genresByMediaType resolver', () => {
    it('should call both tmdbAPI getMovieGenreList and getTvGenreList in genresByMediaTyperesolver',
      () => {
        const { getMovieGenreList, getTvGenreList } = mockContext.dataSources.tmdbAPI;
        getMovieGenreList.mockReturnValue(mockMovieGenreListResponse);
        getTvGenreList.mockReturnValue(mockTvGenreListResponse);

        resolvers.Query.genresByMediaType(null, null, mockContext);

        expect(getMovieGenreList).toHaveBeenCalledTimes(1);
        expect(getTvGenreList).toHaveBeenCalledTimes(1);
      });

    it('should return the expect result object of combined movie and tv genre lists', async () => {
      const { getMovieGenreList, getTvGenreList } = mockContext.dataSources.tmdbAPI;
      getMovieGenreList.mockReturnValue(mockMovieGenreListResponse);
      getTvGenreList.mockReturnValue(mockTvGenreListResponse);

      const res = await resolvers.Query.genresByMediaType(null, null, mockContext);

      expect(res).toEqual(mockGenreByMediaTypeObj);
    });
  });

  describe('query getMovieDetails resolver', () => {
    it('should call tmdbAPI getMovieDetails with passed movieId and return expected result',
      async () => {
        const { getMovieDetails } = mockContext.dataSources.tmdbAPI;
        getMovieDetails.mockReturnValue(mockMovieDetailsResponse);
        const { id: movieId } = mockMovieDetailsResponse;

        const res = await resolvers.Query.movieDetails(null, { movieId }, mockContext);

        expect(res).toEqual(mockMovieDetailsResponse);
        expect(getMovieDetails).toHaveBeenCalledTimes(1);
      });
  });

  describe('query getTvDetails resolver', () => {
    it('should call tmdbAPI getTvDetails with passed tvId and return expected result', async () => {
      const { getTvDetails } = mockContext.dataSources.tmdbAPI;
      getTvDetails.mockReturnValue(mockTvDetailsResponse);
      const { id: tvId } = mockTvDetailsResponse;

      const res = await resolvers.Query.tvDetails(null, { tvId }, mockContext);

      expect(res).toEqual(mockTvDetailsResponse);
      expect(getTvDetails).toHaveBeenCalledTimes(1);
    });
  });

  describe('query getPersonDetails resolver', () => {
    it('should call tmdbAPI getPersonDetails with passed personId and return expected result',
      async () => {
        const { getPersonDetails } = mockContext.dataSources.tmdbAPI;
        getPersonDetails.mockReturnValue(mockPersonDetailsResponse);
        const { id: personId } = mockPersonDetailsResponse;

        const res = await resolvers.Query.personDetails(null, { personId }, mockContext);

        expect(res).toEqual(mockPersonDetailsResponse);
        expect(getPersonDetails).toHaveBeenCalledTimes(1);
      });
  });

  describe('query searchMovies resolver', () => {
    it('should call tmdbAPI searchMovies with passed arguments and return expected result',
      async () => {
        const { searchMovies } = mockContext.dataSources.tmdbAPI;
        searchMovies.mockReturnValue(mockSearchMoviesResponse);
        const { query = 'fox', page } = mockSearchMoviesResponse;

        const res = await resolvers.Query.moviesSearch(null, { query, page }, mockContext);

        expect(res).toEqual(mockSearchMoviesResponse);
        expect(searchMovies).toHaveBeenCalledTimes(1);
      });
  });

  describe('query searchTvShows resolver', () => {
    it('should call tmdbAPI searchTvShows with passed arguments and return expected result',
      async () => {
        const { searchTvShows } = mockContext.dataSources.tmdbAPI;
        searchTvShows.mockReturnValue(mockSearchTvShowsResponse);
        const { query = 'fox', page } = mockSearchTvShowsResponse;

        const res = await resolvers.Query.tvShowsSearch(null, { query, page }, mockContext);

        expect(res).toEqual(mockSearchTvShowsResponse);
        expect(searchTvShows).toHaveBeenCalledTimes(1);
      });
  });

  describe('query searchPeople resolver', () => {
    it('should call tmdbAPI searchPeople with passed arguments and return expected result',
      async () => {
        const { searchPeople } = mockContext.dataSources.tmdbAPI;
        searchPeople.mockReturnValue(mockSearchPeopleResponse);
        const { query = 'fox', page } = mockSearchPeopleResponse;

        const res = await resolvers.Query.peopleSearch(null, { query, page }, mockContext);

        expect(res).toEqual(mockSearchPeopleResponse);
        expect(searchPeople).toHaveBeenCalledTimes(1);
      });
  });
});
