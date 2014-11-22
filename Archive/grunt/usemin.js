module.exports = {
  html: ['<%= package.path.dist %>/{,*/}*.html'],
  css: ['<%= package.path.dist %>/styles/{,*/}*.css'],
  options: {
    assetsDirs: ['<%= package.path.dist %>','<%= package.path.dist %>/images']
  }
};
