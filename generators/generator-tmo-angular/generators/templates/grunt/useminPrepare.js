module.exports = {
  html: '<%= package.path.dist %>/index.html',
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
