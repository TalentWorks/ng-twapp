/**
 * Created by josefsosa on 9/19/14.
 */
// protractor_config.js
// To run this e2e test: protractor test/protractor_e2e_config.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/e2e_main-module.js'],
  capabilities: {
    browserName: 'chrome'
  }
}