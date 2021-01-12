/**
 * --- Getting started with Next.js with Jest ---
 * - Install Jest with 'npm install --save-dev jest babel-jest'
 * - Next.js with Jest example: https://github.com/vercel/next.js/tree/canary/examples/with-jest
 * - Jest documentation:
 * - - https://jestjs.io/docs/en/getting-started
 * - - https://jestjs.io/docs/en/configuration
 * - - https://jestjs.io/docs/en/webpack
 * - Explicitly create .babelrc file with needed "next/babel" preset required for Next.js and and
 *     defined plugins array for Jest to parse the files:
 *     https://nextjs.org/docs/advanced-features/customizing-babel-config
 */
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '__tests__/**/*.{js,jsx,ts,tsx}',
    'apollo/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
    // '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  modulePaths: [
    '<rootDir>',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['<rootDir>/**/?(*.)test.{js,jsx,ts,tsx}'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    // '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  verbose: true,
};
