module.exports = function (grunt) {
  'use strict';
  var u = grunt.option('url');

  return {
    init: {
      configFile: 'test/protractor-init.conf.js',
      singleRun: true,
      options:{
        args: {
          params: {url: u}
        }
      }
    }
  };
};
