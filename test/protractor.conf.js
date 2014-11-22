// To run this e2e test: protractor test/protractor-e2e-config.js
exports.config = {
  specs: ['e2e/*.spec.js'],
  capabilities: {
    browserName: 'chrome'
  }
};
