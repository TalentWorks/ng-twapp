'use strict';

// # Config/Tasks
// All Grunt tasks are now stored in /grunt.
// registerTask has been replaced by /grunt/aliases.js
//
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {
    if (grunt.option('time')) {
        require('time-grunt')(grunt);
    }

    require('load-grunt-config')(grunt);
};
