module.exports = {
  distCss: {
    options: {
      patterns: [
        {
          match: /\.\.\/bower_components\/bootstrap\/fonts\//g,
          replacement: '../fonts/'
        }
      ]
    },
    files: [
      {src: ['<%= package.path.dist %>/styles/vendor.css'], dest: '<%= package.path.dist %>/styles/vendor.css'},
      {src: ['<%= package.path.dist %>/styles/core.css'], dest: '<%= package.path.dist %>/styles/core.css'}
    ]
  },
  distIndex: {
    options: {
      patterns: [
        {
          match: /[\r\n]+/g,
          replacement: '\r\n'
        }
      ]
    },
    files: [
      {src: ['<%= package.path.dist %>/index.html'], dest: '<%= package.path.dist %>/index.html'}
    ]
  },
  dist: {
    options: {
      patterns: [
        {
          match: /\/?scripts\/([^\.]*?)(\/views)?\/([^\/^'^"]*?).html/g,
          replacement: 'views/$1/$3.html'
        }
      ]
    },
    files: [{
      expand: true,
      cwd: '<%= package.path.dist %>',
      src: ['**/*.{js,html,json,css}'],
      dest: '<%= package.path.dist %>'
    }]
  }
};
