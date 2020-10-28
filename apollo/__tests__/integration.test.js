/**
 * --- Apollo Server Integration Tests ---
 *
 * Integration tests for testing the APIs as a black box. The scope of integration tests is to
 * receive a graphql query, and mock-fetch the data for the query using the correct datasource API.
 *
 * More information: https://www.apollographql.com/docs/apollo-server/testing/testing/
 */
import { createTestClient } from 'apollo-server-testing';
import { createTestServer } from 'apollo/__tests__/utils';
import { mockConfigurationResponse } from 'apollo/datasources/__tests__/mocks/tmdbMocks';
import { GET_CONFIGURATION } from 'apollo/__tests__/graphql/tmdb';

describe('apollo server integration tests', () => {
  // after each test, clear the calls and instances of all mocks
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Queries via tmdbAPI', () => {
    it('should query get configuration', async () => {
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
});
