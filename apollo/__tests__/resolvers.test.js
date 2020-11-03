import { resolvers } from 'apollo/resolvers';
import { mockConfigurationResponse } from 'apollo/datasources/__tests__/tmdbMocks/configurationMock';
import {
  mockMovieGenreListResponse,
  mockTvGenreListResponse,
  mockGenreByMediaTypeObj,
} from 'apollo/datasources/__tests__/tmdbMocks/genreListMock';

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
});
