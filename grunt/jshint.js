module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish'),
    ignores: '<%= package.path.app %>/scripts/vendor/**/*.js'
  },
  all: {
    src: [
      '<%= package.path.app %>/scripts/**/*.js'
    ]
  },
  test: {
    options: {
      jshintrc: 'test/.jshintrc'
    },
    src: ['test/unit/**/*.js']
  },
  analyze: {
    options: {
      force: true
    },
    src: [
      'Gruntfile.js',
      'grunt/{,*/}**.js',
      '<%= package.path.app %>/scripts/**/*.js',
      'test/unit/**/*.js'
    ]
  }
};
