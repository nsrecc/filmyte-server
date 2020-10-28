/**
 * --- Integration testing utils ---
 */
import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from 'apollo/typeDefs';
import { resolvers } from 'apollo/resolvers';
import { TMDbAPI } from 'apollo/datasources/tmdbApi';

// create instance of test server which uses existing typeDefs, resolvers, and datasource APIs and
// return server instance along with datasource for overwriting its fetchers
export const createTestServer = () => {
  const tmdbAPI = new TMDbAPI();
  tmdbAPI.apiKey = 'testApiKey';

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      tmdbAPI,
    }),
  });

  return { server, tmdbAPI };
};
