module.exports = {
  displayName: 'ria-react',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { cwd: __dirname, configFile: './babel-jest.config.json' }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/ria-react',
  coverageThreshold: {
    global: {
      statement: 95,
      branches: 33,
      lines: 47,      
      functions: 50
    }
  }  
};
