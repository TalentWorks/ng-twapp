module.exports = {
  dist: {
    files: [
      {
        dest: '<%= package.path.dist %>',
        src: ['<%= package.path.tmp %>index.html']
      }, {
        expand: true,
        dot: true,
        cwd: '<%= package.path.app %>',
        dest: '<%= package.path.dist %>',
        src: [
          '*.{ico,png,txt}',
          '**/*.json',
          '.htaccess',
          'views/{,*/}{,*/}*.html',
          'images/{,*/}*.*',
          'data/i18n/*.json',
          'scripts/{,*/}{,*/}.js',
          'scripts/vendor/*.js'
        ]
      }, {
        expand: true,
        cwd: '.',
        src: 'bower_components/bootstrap/fonts/*',
        flatten: true,
        dest: '<%= package.path.dist %>/fonts'
      }
    ]
  },
  karma: {
    unit: {
      configFile: 'karma.conf.js',
      singleRun: true
    }
  },
  styles: {
    expand: true,
    cwd: '<%= package.path.app %>/styles',
    dest: '<%= package.path.tmp %>/styles/',
    src: '{,*/}*.css'
  },
  devIndex: {
    src: '<%= package.path.app %>/index.tpl.html',
    dest: '<%= package.path.tmp %>/index.html'
  },
  distIndex: {
    src: '<%= package.path.app %>/index.tpl.html',
    dest: '<%= package.path.dist %>/index.html'
  },
  html: {
    expand: true,
    src: '<%= package.path.app %>/scripts/**/views/*.html',
    dest: '<%= package.path.dist %>/scripts/',
    rename: function(dest, src) {
      'use strict';
      var newDest = src.replace(/app\/scripts\/(.*?)(\/views)?\/([^\/]*?).html/g, 'dist/views/$1/$3.html');
      return newDest;
    }
  }
};
