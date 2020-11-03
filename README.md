# Filmyte - Server

Filmyte is a web application for discovering your movies and TV shows.

The web server for Filmyte serves as a gateway between [Filmyte web client](https://github.com/nsrecc/filmyte) and the APIs that power it to selectively fulfill data requests.

## Installation

### Setup

TO DO

### Usage

Run the server for development environment: `npm run dev`

Open [http://localhost:4000](http://localhost:4000) with your browser to see the Filmyte web server.

In development mode, open [http://localhost:4000/api/graphql](http://localhost:4000/api/graphql) with your browser to see the Filmyte web server GraphQL playground.

### Testing

Ensure that `.babelrc` file exists at root directory with the required `"next/babel"` preset for Next.js and `"@babel/plugin-transform-react-jsx"` plugin for Jest to work correctly with Babel's React JSX transformations.

Configure the `jest.config.js` file to only run test files with certain name scheme `*.test.js`, and to collect coverage from certain files.

Run the Jest test framework: `npm test`

Coverage results are placed in the `/coverage` folder at the root directory.

## Built With

* JavaScript
* [React](https://reactjs.org/) - JavaScript library for building user interfaces
* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [GraphQL](https://graphql.org/) - Query language for APIs
* [Apollo GraphQL](https://www.apollographql.com/) - Data graph platform which includes Apollo Server
    * [Apollo REST Data Source](https://github.com/apollographql/apollo-server/tree/main/packages/apollo-datasource-rest) - Package with a class to fetch data from a REST API and expose it via GraphQL within Apollo Server
    * [apollo-server-micro](https://github.com/apollographql/apollo-server/tree/main/packages/apollo-server-micro) - A [Micro](https://github.com/vercel/micro) integration for the Apollo community GraphQL server 
* [Next.js](https://nextjs.org/) - React framework for production with hybrid static and server rendering, smart bundling, route pre-fetching, file-system routing, built-in support for CSS Modules and Sass, etc.
* [Lodash](https://lodash.com/) - Modern JavaScript utility library
* [qs](https://github.com/ljharb/qs) - Querystring parser and stringifier with nesting support
* [Jest](https://jestjs.io/en/) - JavaScript Testing Framework
* [node-mocks-http](https://github.com/howardabrams/node-mocks-http) - Mock 'http' objects for Next.js API route testing

## Powered By

* [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api) - This product uses the TMDb API but is not endorsed or certified by TMDb.
    * [Terms of Use](https://www.themoviedb.org/terms-of-use)
    * [Privacy Policy](https://www.themoviedb.org/privacy-policy)
* [Vercel](https://vercel.com/) - JAMstack website and web service deployment cloud platform

## Author

* Noel Recchia ([@nsrecc](https://github.com/nsrecc))
