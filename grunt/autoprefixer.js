module.exports = {
  options: {
    browsers: ['last 1 version']
  },
  less: {
    files: [{
      expand: true,
      cwd: '<%= package.path.tmp %>/styles/',
      src: '{,*/}*.css',
      dest: '<%= package.path.tmp %>/styles/'
    }]
  }
};
