module.exports = {
  options: {
    livereload: true
  },
  bower: {
    files: ['bower.json'],
    tasks: ['wiredep']
  },
  html: {
    files: ['<%= package.path.tmp %>/**/*.html', '<%= package.path.app %>/**/*.html']
  },
  css: {
    files: ['<%= package.path.tmp %>/styles/{,*/}*.css'],
	tasks: ['injector:devCss']
  },
  images: {
    files: ['<%= package.path.app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}']
  },
  js: {
    files: ['<%= package.path.app %>/scripts/**/*.js'],
    tasks: ['newer:jshint:all', 'injector:devJs'],
    options: {
      livereload: '<%= connect.options.livereload %>'
    }
  },
  jsTest: {
    files: ['test/spec/{,*/}*.js'],
    tasks: ['newer:jshint:test', 'karma']
  },
  less: {
    files: ['app/styles/less/{,*/}*.less'],
    tasks: ['less', 'autoprefixer:less', 'injector:devCss']
  },
  gruntfile: {
    files: ['Gruntfile.js']
  }
};

