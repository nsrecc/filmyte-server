import { resolvers } from 'apollo/resolvers';
import { mockConfigurationResponse } from 'apollo/datasources/__tests__/tmdbMocks/configurationMock';
import {
  mockMovieGenreListResponse,
  mockTvGenreListResponse,
  mockGenreByMediaTypeObj,
} from 'apollo/datasources/__tests__/tmdbMocks/genreListMock';
import { mockMovieDetailsResponse } from 'apollo/datasources/__tests__/tmdbMocks/movieDetailsMock';
import { mockTvDetailsResponse } from 'apollo/datasources/__tests__/tmdbMocks/tvDetailsMock';

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
      },
    },
  };

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
});
