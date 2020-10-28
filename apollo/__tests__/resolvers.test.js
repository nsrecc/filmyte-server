/**
 * --- Apollo Server Resolvers Tests ---
 */
import { resolvers } from 'apollo/resolvers';
import { mockConfigurationResponse } from 'apollo/datasources/__tests__/mocks/tmdbMocks';

describe('apollo server resolvers tests', () => {
  // after each test, clear the calls and instances of all mocks
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Resolvers via tmdbAPI', () => {
    // create mockContext with mocked datasource fetcher to be passed to resolver
    const mockContext = {
      dataSources: {
        tmdbAPI: { getConfiguration: jest.fn().mockName('tmdbAPI.getConfiguration') },
      },
    };

    it('should call tmdbAPI getConfiguration in configuration resolver', async () => {
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
});
