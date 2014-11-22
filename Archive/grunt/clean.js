module.exports = {
  dist: {
    files: [
      {
        dot: true,
        src: [
          '.tmp',
          '<%= package.path.dist %>/{,*/}*',
          '!<%= package.path.dist %>/.git*'
        ]
      }
    ]
  },
  server: '.tmp'
};
