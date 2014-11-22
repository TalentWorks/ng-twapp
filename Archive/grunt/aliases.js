module.exports = function(grunt, options) {
  return {
    'serve': function(options) {
      if (options === 'dist') {
        return grunt.task.run(['build', 'connect:dist:keepalive']);
      }

      grunt.task.run([
        'clean:server',
        'less:development',
        'autoprefixer',
        'connect:livereload',
        'jshint',
        'watch'
      ]);
    },
    'test': function(options) {
      grunt.task.run('clean');

      switch(options) {
        case 'dev':
          grunt.task.run(
            'karma:dev'
          );
          break;

        case 'unit':
          grunt.task.run(
            'karma:unit'
          );
          break;
        case 'e2e':
          grunt.task.run(
            'karma:e2e'
          );
          break;

        case 'coverage':
          grunt.task.run(
            'karma:dev'
          );
          break;

        default:
          grunt.task.run(
            'mocha:unit',
            'test:coverage',
            'test:e2e'
          );
      }
    },
    'build-less': [
      'clean:server',
      'less:development',
      'autoprefixer:less'
    ],
    'build': [
      'clean:dist',
      'wiredep',
      'less:development',
      'useminPrepare',
      'concurrent:dist',
      'autoprefixer',
      'concat',
      'ngAnnotate',
      'copy:dist',
      'cssmin',
      'uglify',
      'replace',
      'filerev',
      'usemin',
      'htmlmin',
      'removelogging'
    ],
    'default': [
      'newer:jshint',
      'test',
      'build'
    ]
  }
};