module.exports = {
  dist: {
    options: {
      patterns: [
        {
          match: /\.\.\/bower_components\/bootstrap\/fonts\//g,
          replacement: '../fonts/'
        }
      ]
    },
    files: [
      {src: ['<%= package.path.dist %>/styles/vendor.css'], dest: '<%= package.path.dist %>/styles/vendor.css'}
    ]
  }
};
