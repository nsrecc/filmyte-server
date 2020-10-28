/**
 * --- TMDbAPI Datasource Tests ---
 *
 * More information: https://www.apollographql.com/docs/apollo-server/testing/testing/
 */
import { TMDbAPI } from 'apollo/datasources/tmdbApi';
import { mockConfigurationResponse } from 'apollo/datasources/__tests__/mocks/tmdbMocks';

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
    it('should call GET /configuration with the correct parameters', async () => {
      // return mock response when mock function is called
      tmdbAPI.get.mockReturnValue(mockConfigurationResponse);

      // invoke datasource fetching
      const res = await tmdbAPI.getConfiguration();

      // make sure the datasource fetch was called properly
      expect(res).toEqual(mockConfigurationResponse);
      expect(tmdbAPI.get).toHaveBeenCalledTimes(1);
      expect(tmdbAPI.get).toHaveBeenCalledWith(`/configuration?api_key=${tmdbAPI.apiKey}`);
    });
  });
});
