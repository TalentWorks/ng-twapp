/**
 * Created by josefsosa on 9/19/14.
 */
// To run this unit test: protractor test/protractor_config.js
exports.config = {
  framework:'mocha',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/mocha-test-spec.js']
}

