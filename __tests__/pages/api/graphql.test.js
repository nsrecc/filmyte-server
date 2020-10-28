/**
 * --- Next.js API route tests ---
 *
 * Test files cannot exist inside the /pages folder because Next.js will serve them as actual pages.
 *
 * Getting started: https://github.com/vercel/next.js/discussions/11784#discussioncomment-41842
 */
import { createMocks } from 'node-mocks-http';
import graphqlHandler from 'pages/api/graphql';

describe('next.js graphql api route', () => {
  it('should return 200 ok when receiving request with correct url', async () => {
    // mock req with method GET and GraphQL API path (same path where the GraphQL playground runs)
    const { req, res } = createMocks({
      method: 'GET',
      url: '/api/graphql',
    });

    // execute handler
    await graphqlHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
  });

  it('should return 404 not found when receiving request with incorrect url', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      url: '/test',
    });

    await graphqlHandler(req, res);

    expect(res._getStatusCode()).toBe(404);
  });
});
