module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= package.path.app %>/images',
      src: '{,*/}*.{png,jpg,jpeg,gif}',
      dest: '<%= package.path.dist %>/images'
    }]
  }
};
