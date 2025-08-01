export default {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
};
