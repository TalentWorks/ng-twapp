module.exports = {
  dev: {
    configFile: 'test/karma.conf.js',
    singleRun: false
  },
  ci: {
    configFile: 'test/karma.conf.js',
    singleRun: true
  },
  unit: {
      configFile: 'test/karma.conf.js',
      singleRun: true,
      runnerPort: 9999,
      logLevel: 'ERROR'
  },
  e2e: {
    configFile: 'test/karma-e2e.conf.js',
    singleRun: true,
    runnerPort: 9999,
    logLevel: 'ERROR'
  }
};
