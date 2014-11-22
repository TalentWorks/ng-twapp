module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= package.path.app %>/images',
      src: '{,*/}*.svg',
      dest: '<%= package.path.dist %>/images'
    }]
  }
};
