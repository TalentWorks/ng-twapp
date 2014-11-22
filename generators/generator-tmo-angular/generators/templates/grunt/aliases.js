module.exports = function(grunt) {
  'use strict';
  return {
    'serve': function(options) {
      if (options === 'dist') {
        return grunt.task.run(['build', 'connect:dist:keepalive']);
      }
      grunt.task.run([
        'jshint:all',
        'clean:server',
        'less:development',
		'copy:devIndex',
        'copy:styles',
		'injector:devJs',
		'injector:devVendorJs',
        'injector:devCss',
        'wiredep:app',
        'autoprefixer',
        'connect:livereload',
        'watch'
      ]);
    },
    'test': function(options) {
      grunt.task.run('clean', 'copy:devIndex', 'injector:devJs', 'injector:devVendorJs');
      switch (options) {
      case 'dev':
        grunt.task.run(
          'karma:dev'
        );
        break;
      case 'unit':
        grunt.task.run(
          'autoprefixer',
          'connect:test',
          'karma:unit'
        );
        break;
      case 'e2e':
        grunt.task.run(
          'protractor:e2e'
        );
        break;
      case 'jsload':
        grunt.task.run(
          'protractor:init'
        );
        break;
      case 'coverage':
        grunt.task.run(
          'karma:dev'
        );
        break;

      default:
        grunt.task.run(
          'karma:unit',
          'test:coverage',
          'test:e2e'
        );
      }
    },
    'build-less': [
      'clean:server',
      'less:development',
      'autoprefixer'
    ],
    'build': [
      'jshint:all',
      'clean:dist',
      'less:development',
      'copy:distIndex',
	  'injector:distJs',
      'injector:distVendorJs',
      'injector:distCss',
      'autoprefixer',
      'wiredep:dist',
      'useminPrepare',
      'concat',
      'ngAnnotate',
      'copy:dist',
      'copy:styles',
      'copy:html',
      'removelogging',
      'cssmin',
      'uglify',
      'replace',
      'usemin',
      'htmlmin'
    ],
    'default': [
      'newer:jshint',
      'test',
      'build'
    ],
    'analyze': function(options) {
      switch (options) {
      case 'full':
        grunt.task.run('jshint:analyze', 'htmlangular', 'lesslint');
        break;
      case 'html':
        grunt.task.run('htmlangular');
        break;
      case 'less':
        grunt.task.run('lesslint');
        break;
      default:
        grunt.task.run('jshint:analyze');
      }
    },
    'format': function() {
      grunt.task.run('jsbeautifier');
    }
  };
};