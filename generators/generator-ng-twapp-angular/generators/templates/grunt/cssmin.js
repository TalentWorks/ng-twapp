module.exports = {
  dist: {
    files: [
      {
      	src: [
      	  '<%= package.path.tmp %>/styles/less/vendor.css'
      	],
      	  dest: '<%= package.path.dist %>/styles/vendor.css'
      },
      {
      	src: [
      	  '<%= package.path.tmp %>/styles/**/*.css',
      	  '<%= package.path.app %>/styles/**/*.css',
      	  '!<%= package.path.tmp %>/styles/less/vendor.css'
      	], 
      	dest: '<%= package.path.dist %>/styles/core.css'
      }
    ]
  }
};
