module.exports = {
  automock: false,
  verbose: true,
  testRegex: 'src.*\\.test\\.js?$',
  moduleDirectories: ['node_modules', './src/app', './src/local-typings'],
  moduleNameMapper: {},
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer'],
  modulePathIgnorePatterns: [
    '<rootDir>/src/.*/__mocks__',
    '<rootDir>/src/.*/__mock__',
  ],
  setupFilesAfterEnv: ['<rootDir>/enzyme-setup.js'],
  setupFiles: [],
  coverageDirectory: '<rootDir>/jest/coverage',
  testResultsProcessor: 'jest-junit',
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: '<rootDir>/jest/coverage' }],
  ],
  coverageThreshold: {
    global: {
      statements: 78,
    },
  },
};
