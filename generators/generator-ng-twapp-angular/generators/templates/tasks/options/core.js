module.exports = function(grunt) {
    var usemin = require('tmo-usemin-util');

    ['dev', 'stage', 'build'].forEach(function(env) {
        if (grunt.option(env)) {
            process.env.NODE_ENV = env;
        }
    });

    if (!process.env.NODE_ENV) {
        process.env.NODE_ENV = 'build';
    }

    return {
        env: {
            dev: {NODE_ENV: 'dev'},
            stage: {NODE_ENV: 'stage'},
            build: {NODE_ENV: 'build'}
        },

        clean: {
            src: ['.tmp', 'build']
        },

        useminPrepare: {
            options: {
                root: 'src/client',
                dest: 'build/public',
                flow: usemin.flow({
                    js: ['concat'],
                    css: ['autoprefixer', 'concat']
                })
            }
        },

        usemin: {
            options: {
                min: true
            }
        },

        uglify: {
            options: {
                sourceMap: true
            }
        },

        newer: {
            options: {
                cache: '.tmp/newer'
            }
        },

        autoprefixer: {
            options: {
                map: false
            }
        }
    };
};
