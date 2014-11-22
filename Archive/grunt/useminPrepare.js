module.exports = {
  html: '<%= package.path.app %>/index.html',
  options: {
    dest: '<%= package.path.dist %>',
    flow: {
      html: {
        steps: {
          js: ['concat', 'uglifyjs'],
          css: ['cssmin']
        },
        post: {}
      }
    }
  }
};
