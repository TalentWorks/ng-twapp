// To run this e2e test: protractor test/protractor-e2e-config.js
// This config file is used just to run one single test, to make sure that all javascripts are loaded - will be put into Jenkins workflow
exports.config = {
  seleniumAddress: 'http://172.28.89.43:4444/wd/hub',
  specs: ['e2e/e2e_main-module.spec.js'],
  capabilities: {
    browserName: 'firefox'
  },
  params: {
    url: 'http://localhost:9000'
  }
};
