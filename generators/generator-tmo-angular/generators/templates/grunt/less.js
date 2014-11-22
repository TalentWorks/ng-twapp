module.exports = {
  development: {
    options: {
      paths: ['styles/less/'],
      cleancss: true
    },
    files: [{
      expand: true,
      cwd: '<%= package.path.app %>/styles/less',
      src: ['**/*.less'],
      dest: '<%= package.path.tmp %>/styles',
      ext: '.css'
    }]
  },
  production: {
    options: {
      paths: ['styles/less/'],
      cleancss: true
    },
    files: [{
      expand: true,
      cwd: '<%= package.path.app %>/styles/less',
      src: ['**/*.less'],
      dest: '<%= package.path.tmp %>/styles',
      ext: '.css'
    }]
  }
};
