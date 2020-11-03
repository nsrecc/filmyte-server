/**
 * The RESTDataSource class comes with built-in support for caching responses from REST resources
 * with no additional setup, called "partial query caching", as well as deduplication and error
 * handling
 *
 * Inside each async function, return the promise directly to the resolver so that the resolver can
 * pass any API errors to the client directly so that client can handle the errors
 *
 * For more information: https://www.apollographql.com/docs/apollo-server/data/data-sources/
 */
import { RESTDataSource } from 'apollo-datasource-rest';
import qs from 'qs';

export class TMDbAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TMDB_API_BASE_URL;
    this.apiKey = process.env.TMDB_API_KEY;
  }

  /**
   * Configuration API: https://developers.themoviedb.org/3/configuration/get-api-configuration
   *
   * This API is needed to build all image URLs from TMDb.
   *
   * Originally, I wanted to pass `cacheOptions: { ttl: 86400 }` for 24 hour request cache option
   * for this API as the documentation suggests to cache this response data. However, in the API
   * response headers, 'cache-control' had values 'max-age=0, private, must-revalidate'. Therefore,
   * apollo-datasource-rest will not cache the request due to this response header. Looking through
   * the source code of 'apollo-datasource-rest' and its usage of HTTPCache, as well as this
   * stackoverflow link helped me understand this caching functionality:
   * https://stackoverflow.com/questions/56906712/cant-get-default-apollo-server-cache-to-work/60408100#60408100
   */
  async getConfiguration() {
    const queryString = qs.stringify({ api_key: this.apiKey });
    return this.get(`/configuration?${queryString}`);
  }

  /**
   * Genres - Movie Genre List API: https://developers.themoviedb.org/3/genres/get-movie-list
   */
  async getMovieGenreList() {
    const queryString = qs.stringify({ api_key: this.apiKey });
    return this.get(`/genre/movie/list?${queryString}`);
  }

  /**
   * Genres - TV Genre List API: https://developers.themoviedb.org/3/genres/get-tv-list
   */
  async getTvGenreList() {
    const queryString = qs.stringify({ api_key: this.apiKey });
    return this.get(`/genre/tv/list?${queryString}`);
  }
}
