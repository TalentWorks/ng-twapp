module.exports = {
  dist: {
    options: {
      collapseWhitespace: true,
      conservativeCollapse: true,
      collapseBooleanAttributes: true,
      removeCommentsFromCDATA: true,
      removeOptionalTags: true
    },
    files: [{
      expand: true,
      cwd: '<%= package.path.dist %>',
      src: ['*.html', 'views/{,*/}*.html'],
      dest: '<%= package.path.dist %>'
    }]
  }
};
