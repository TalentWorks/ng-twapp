module.exports = function(grunt) {
    var usemin = require('tmo-usemin-util');

    return {
        useminPrepare: {
            options: {
                flow: usemin.flow({
                    less: ['less', 'autoprefixer', 'concat']
                })
            }
        },

        usemin: {
            options: {
                min: true,
                blockReplacements: usemin.blocks({
                    less: 'css'
                })
            }
        },

        less: {
            build: {
                options: {
                    sourceMap: false,
                    paths: [
                        'node_modules',
                        'bower_components'
                    ]
                }
            }
        }
    };
};
