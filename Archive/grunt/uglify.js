module.exports = {
  options: {
    compress: {
      global_defs: {
        "DEBUG": false
      }
    }
  },
  dist: {
    files: {
      '<%= package.path.dist %>/scripts/scripts.js': [
        '<%= package.path.dist %>/scripts/scripts.js'
      ]
    }
  }
};
