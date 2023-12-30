module.exports = {
  rootDir: './',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '<rootDir>/node_modules/',
    '!<rootDir>/src/common/background/**',
    '!<rootDir>/src/index.ts'
  ],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  coverageReporters: ['json', 'html', 'text'],
  transformIgnorePatterns: ['node_modules/(?!@?lit)']
}
