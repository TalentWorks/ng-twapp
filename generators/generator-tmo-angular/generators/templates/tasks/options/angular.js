module.exports = function(grunt) {
    var usemin = require('tmo-usemin-util');

    return {
        useminPrepare: {
            options: {
                flow: usemin.flow({
                    ng: ['ngAnnotate', 'concat']
                })
            }
        },

        usemin: {
            options: {
                blockReplacements: usemin.blocks({
                    ng: 'js'
                }),
            }
        },

        ngAnnotate: {
            generated: {
                options: {
                    add: true,
                    singleQuotes: true
                }
            }
        },

        ngtemplates: {
            angular: {
                options: {
                    module: '<%= appName %>',
                    standalone: false,
                    append: true,
                    htmlmin: {
                        collapseWhitespace: true,
                        conservativeCollapse: true,
                        collapseBooleanAttributes: true,
                        removeCommentsFromCDATA: true,
                        removeOptionalTags: true
                    }
                },
                cwd: 'src/client',
                src: ['**/*.html', '!index.html'],
                dest: 'build/public/media/<%%= cfg.name %>/<%%= cfg.name %>.js'
            }
        }
    };
};
