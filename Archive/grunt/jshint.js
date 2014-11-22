module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  all: {
    src: [
      'Gruntfile.js',
      '<%= package.path.app %>/scripts/**/*.js'
    ]
  },
  test: {
    options: {
      jshintrc: 'test/.jshintrc'
    },
    src: ['test/spec/**/*.js']
  }
};
