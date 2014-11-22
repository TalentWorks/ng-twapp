module.exports = {
  options: {
    compress: {
      global_defs: {
        'DEBUG': false
      }
    }
  },
  dist: {
    files: [{
      expand: true,
      src: '<%= package.path.dist %>/scripts/*.js',
      dest: '<%= package.path.dist %>/scripts/'
    }]
  }
};