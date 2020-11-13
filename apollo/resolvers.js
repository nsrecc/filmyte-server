import { get } from 'lodash';

/**
 * --- Resolvers ---
 * - Tells Apollo how to fetch the data for each field being queried or mutated.
 * - Keep resolvers thin as a best practice. Backing logic can be safely refactored where needed.
 * - Resolver function signature --- fieldName: (parent, args, context, info) => data;
 *
 * Inside each resolver, return the promise directly so that the resolver can pass any API errors
 * to the client directly so that client can handle the errors.
 *
 * Do not destructure fetchers out of 'dataSources.tmdbAPI' because tmdbAPI is a class.
 */
export const resolvers = {
  Query: {
    configuration: async (parent, args, { dataSources }) => (
      dataSources.tmdbAPI.getConfiguration()
    ),

    genresByMediaType: async (parent, args, { dataSources }) => {
      const [movieGenreList, tvGenreList] = await Promise.all([
        dataSources.tmdbAPI.getMovieGenreList(),
        dataSources.tmdbAPI.getTvGenreList(),
      ]);

      return {
        movieGenres: get(movieGenreList, 'genres', []),
        tvGenres: get(tvGenreList, 'genres', []),
      };
    },

    movieDetails: async (parent, { movieId }, { dataSources }) => (
      dataSources.tmdbAPI.getMovieDetails(movieId)
    ),

    tvDetails: async (parent, { tvId }, { dataSources }) => (
      dataSources.tmdbAPI.getTvDetails(tvId)
    ),

    personDetails: async (parent, { personId }, { dataSources }) => (
      dataSources.tmdbAPI.getPersonDetails(personId)
    ),
  },
};
