module.exports = {
  displayName: 'api-interfaces',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' }
  },
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/api-interfaces',
  coverageThreshold: {
    global: {
      statement: 100,
      branches: 100,
      lines: 100,
      functions: 100
    }
  }
};
