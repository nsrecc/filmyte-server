/**
 * --- Resolvers ---
 * - Tells Apollo how to fetch the data for each field being queried or mutated.
 * - Keep resolvers thin as a best practice. Backing logic can be safely refactored where needed.
 * - Resolver function signature --- fieldName: (parent, args, context, info) => data;
 */
export const resolvers = {
  Query: {
    configuration: async (parent, args, { dataSources }) => (
      dataSources.tmdbAPI.getConfiguration()
    ),
  },
};
