module.exports = {
  automock: false,
  verbose: true,
  testRegex: 'src.*\\.test\\.js?$',
  moduleDirectories: ['node_modules', './src/app', './src/local-typings'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/mocks/assets.js',
    '\\.(css|scss|less)$': '<rootDir>/jest/mocks/style.js',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
  },
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
