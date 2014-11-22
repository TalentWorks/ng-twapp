module.exports = {
  default_options: {
    files: {
      'dist/plato_reports/default_options': ['<%= package.path.app %>/scripts/**/*.js', '<%= package.path.test %>/unit/**/*.js']
    }
  },
  custom_complexity: {
    options: {
      jshintrc: '.jshintrc',
      complexity: {
        logicalor: false,
        switchcase: false,
        forin: true,
        trycatch: true
      }
    },
    files: {
      'dist/plato_reports/custom_complexity': ['<%= package.path.app %>/scripts/**/*.js', '<%= package.path.test %>/unit/**/*.js']
    }
  },
  custom_jshintrc: {
    options: {
      jshintrc: '.jshintrc'
    },
    files: {
      'dist/plato_reports/custom_jshintrc': ['<%= package.path.app %>/scripts/**/*.js', '<%= package.path.test %>/unit/**/*.js']
    }
  },
  no_jshintrc: {
    options: {
      jshint: false
    },
    files: {
      'dist/plato_reports/no_jshintrc': ['<%= package.path.app %>/scripts/**/*.js', '<%= package.path.test %>/unit/**/*.js']
    }
  },
  exclude: {
    options: {
      exclude: /\.rangeSlider\.js$/
    },
    files: {
      'dist/plato_reports/exclude_reports': ['<%= package.path.app %>/scripts/**/*.js']
    }
  }
};