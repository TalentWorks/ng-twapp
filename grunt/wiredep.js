module.exports = {
  app: {
    src: ['<%= package.path.tmp %>/index.html'],
    ignorePath:  /\.\.\//,
    exclude: ['es5-shim', 'json3', 'bootstrap.css']
  },
  dist: {
    src: ['<%= package.path.dist %>/index.html'],
    ignorePath:  /\.\.\//,
    exclude: ['es5-shim', 'json3', 'bootstrap.css']
  }
};
