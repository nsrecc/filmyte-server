import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from 'apollo/typeDefs';
import { resolvers } from 'apollo/resolvers';

// initialize Apollo Server
const apolloServer = new ApolloServer({ typeDefs, resolvers });

// Disable bodyParser so that requests don't get blocked for handler to work
export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
