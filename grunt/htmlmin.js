module.exports = {
  dist: {
    options: {
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeCommentsFromCDATA: true,
      removeOptionalTags: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    },
    files: [{
      expand: true,
      cwd: '<%= package.path.dist %>',
      src: ['*.html', 'views/{,*/}*.html'],
      dest: '<%= package.path.dist %>'
    }]
  }
};
