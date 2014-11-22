module.exports = {
  options: {
    config: '.jscsrc',
    'excludeFiles': [
      '<%= package.path.app %>/scripts/vendor/**'
    ]
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
