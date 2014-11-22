module.exports = function(grunt) {
    return {
        jshint: {
            options: {
                force: true,
                jshintrc: '.jshintrc'
            },
            src: 'src/client/**/*.js'
        },

        jscs: {
            options: {
                force: true,
                config: '.jscsrc'
            },
            src: 'src/client/**/*.js'
        }
    };
};
