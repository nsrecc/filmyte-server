/**
 * --- Next.js API route for Apollo Server with GraphQL ---
 *
 * More information: https://nextjs.org/docs/api-routes/introduction
 */
import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from 'apollo/typeDefs';
import { resolvers } from 'apollo/resolvers';
import { TMDbAPI } from 'apollo/datasources/tmdbApi';

const isProduction = process.env.NEXT_PUBLIC_GRAPHQL_PLAYGROUND_ENV === 'production';

// initialize Apollo Server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    tmdbAPI: new TMDbAPI(),
  }),
  ...(!isProduction && {
    playground: {
      settings: {
        'schema.polling.enable': false,
      },
    },
    introspection: !isProduction,
  }),
});

/**
 * Export custom config for this API Route to disable Next.js bodyParser.
 * This allows Apollo Server to parse the body of HTTP requests instead.
 * For more information: https://nextjs.org/docs/api-routes/api-middlewares#custom-config
 */
export const config = {
  api: {
    bodyParser: false,
  },
};

// create handler for incoming GraphQL requests
const handler = apolloServer.createHandler({ path: '/api/graphql' });

// export as default the request handler function, which takes arguments for 'req' and 'res'
export default handler;
