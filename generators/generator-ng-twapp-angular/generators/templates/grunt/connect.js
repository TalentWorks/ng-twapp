module.exports = function(grunt) {
  'use strict';
  return {
    options: {
      port: 9000,
      // Change this to '0.0.0.0' to access the server from outside.
      hostname: 'localhost',
      livereload: 35729
    },
    livereload: {
      options: {
        open: true,
        middleware: function (connect) {
          return [
            connect.static(grunt.config.data.package.path.tmp),
            connect().use(
              '/bower_components',
              connect.static('./bower_components')
            ),
            connect.static(grunt.config.data.package.path.app)
          ];
        }
      }
    },
    test: {
      options: {
        port: 9001,
        middleware: function (connect) {
          return [
            connect.static(grunt.config.data.package.path.tmp),
            connect.static('test'),
            connect().use(
              '/bower_components',
              connect.static('./bower_components')
            ),
            connect.static(grunt.config.data.package.path.app)
          ];
        }
      }
    },
    dist: {
      options: {
        open: true,
        base: '<%= package.path.dist %>'
      }
    }
  };
};
