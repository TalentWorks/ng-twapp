module.exports = {
  options: {
    livereload: true
  },
  bower: {
    files: ['bower.json'],
    tasks: ['wiredep']
  },
  html: {
    files: ['<%= package.path.app %>/**/*.html']
  },
  css: {
    files: ['.tmp/styles/{,*/}*.css']
  },
  images: {
    files: ['<%= package.path.app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}']
  },
  js: {
    files: ['<%= package.path.app %>/scripts/**/*.js'],
    tasks: ['newer:jshint:all'],
    options: {
      livereload: '<%= connect.options.livereload %>'
    }
  },
  jsTest: {
    files: ['test/spec/{,*/}*.js'],
    tasks: ['newer:jshint:test', 'karma']
  },
  less: {
    files: ['app/styles/less/{,*/}*.{less,less}'],
    tasks: ['build-less', 'autoprefixer:less']
  },
  gruntfile: {
    files: ['Gruntfile.js']
  }
};

