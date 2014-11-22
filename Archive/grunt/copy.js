module.exports = {
  dist: {
    files: [
      {
        expand: true,
        dot: true,
        cwd: '<%= package.path.app %>',
        dest: '<%= package.path.dist %>',
        src: [
          '*.{ico,png,txt}',
          '.htaccess',
          '*.html',
          'views/{,*/}{,*/}*.html',
          'images/{,*/}*.{webp}',
          'data/i18n/*.json',
          'scripts/{,*/}{,*/}.js',
          'scripts/**/views/*.html',
          'styles/images/*.*'
        ]
      }, {
        expand: true,
        cwd: '.tmp/images',
        dest: '<%= package.path.dist %>/images',
        src: ['generated/*']
      }, {
        expand: true,
        cwd: '.',
        src: 'bower_components/bootstrap/fonts/*',
        flatten: true,
        dest: '<%= package.path.dist %>/fonts'
      }, {
        expand: true,
        cwd: '.tmp/styles',
        src: ['**/*.css'],
        dest: '<%= package.path.dist %>/styles',
        ext: '.css'
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
    dest: '.tmp/styles/',
    src: '{,*/}*.css'
  }
};
