module.exports = {
  dist: {
    files: {
      '<%= package.path.dist %>/styles/main.css': [
        '.tmp/styles/{,*/}*.css',
        '.tmp/scripts/i18n/*.json'
      ]
    }
  }
};
