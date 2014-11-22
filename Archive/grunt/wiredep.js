module.exports = {
  app: {
    src: ['<%= package.path.dist %>/index.html'],
    ignorePath:  /\.\.\//
  },
  less: {
    src: ['<%= package.path.dist %>/styles/{,*/}*.{less,less}'],
    ignorePath: /(\.\.\/){1,2}bower_components\//
  }
};
