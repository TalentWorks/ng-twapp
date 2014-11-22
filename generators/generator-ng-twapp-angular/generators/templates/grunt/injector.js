module.exports = {
    devCss: {
      options: {
        starttag: '<!-- injector:css -->',
        transform: function(filePath) {
          'use strict';
          filePath = filePath.replace('/.tmp/', '');
          return '<link rel="stylesheet" href="' + filePath + '">';
        },
        template: '<%= package.path.tmp %>/index.html'
      },
      files: {
        '<%= package.path.tmp %>/index.html': ['<%= package.path.tmp %>/styles/**/*.css', '!<%= package.path.tmp %>/styles/common/**/*.css', '!<%= package.path.tmp %>/styles/vendor.css']
      }
    },
    distCss: {
      options: {
        starttag: '<!-- injector:css -->',
        transform: function(filePath) {
          'use strict';
          filePath = filePath.replace('/.tmp/', '');
          return '<link rel="stylesheet" href="' + filePath + '">';
        },
        template: '<%= package.path.dist %>/index.html'
      },
      files: {
        '<%= package.path.dist %>/index.html': ['<%= package.path.tmp %>/styles/**/*.css', '!<%= package.path.tmp %>/styles/common/**/*.css', '!<%= package.path.tmp %>/styles/vendor.css']
      }
    },
    devJs: {
      options: {
        starttag: '<!-- injector:js -->',
        transform: function(filePath) {
          'use strict';
          filePath = filePath.replace('/app/', '');
          return '<script src="' + filePath + '"></script>';
        },
        template: '<%= package.path.tmp %>/index.html'
      },
      files: {
        '<%= package.path.tmp %>/index.html': [
          '<%= package.path.app %>/scripts/app.js',
          '<%= package.path.app %>/scripts/route-config.js',
          '<%= package.path.app %>/scripts/**/*-config.js',
          '<%= package.path.app %>/scripts/**/*.js',
          '!<%= package.path.app %>/scripts/vendor/**/*'
        ]
      }
    },
	devVendorJs: {
      options: {
        starttag: '<!-- injector:vendorjs -->',
        transform: function(filePath) {
          'use strict';
          filePath = filePath.replace('/app/', '');
          return '<script src="' + filePath + '"></script>';
        },
        template: '<%= package.path.tmp %>/index.html'
      },
      files: {
        '<%= package.path.tmp %>/index.html': [
          '<%= package.path.app %>/scripts/vendor/**/*'
        ]
      }
    },
	distJs: {
      options: {
        starttag: '<!-- injector:js -->',
        transform: function(filePath) {
          'use strict';
          filePath = filePath.replace('/app/', '');
          return '<script src="' + filePath + '"></script>';
        },
        template: '<%= package.path.dist %>/index.html'
      },
      files: {
        '<%= package.path.dist %>/index.html': [
          '<%= package.path.app %>/scripts/app.js',
          '<%= package.path.app %>/scripts/route-config.js',
          '<%= package.path.app %>/scripts/**/*-config.js',
          '<%= package.path.app %>/scripts/**/*.js',
          '!<%= package.path.app %>/scripts/vendor/**/*'
        ]
      }
    },
	distVendorJs: {
      options: {
        starttag: '<!-- injector:vendorjs -->',
        transform: function(filePath) {
          'use strict';
          filePath = filePath.replace('/app/', '');
          return '<script src="' + filePath + '"></script>';
        },
        template: '<%= package.path.dist %>/index.html'
      },
      files: {
        '<%= package.path.dist %>/index.html': [
          '<%= package.path.app %>/scripts/vendor/**/*'
        ]
      }
    }
};