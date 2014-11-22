module.exports = function(grunt) {
    return {
        wiredep: {
            assemble: {
                src: 'src/client/index.html'
            }
        },

        injector: {
            assemble: {
                options: {
                    template: 'src/client/index.html',
                    ignorePath: 'src/client',
                    addRootSlash: false
                },
                dest: 'src/client/index.html',
                src: [
                    'src/client/**/*.module.js',
                    'src/client/**/*.js',
                    '!**/*.spec.js',
                    '!src/client/<%%= dasherizedAppName %>/test/**'
                ]
            }
        },
        
        processhtml: {
            assemble: {
                options: {
                    process: true,
                    commentMarker: 'build',
                    data: {
                        pkg: grunt.config.get('pkg'),
                        cfg: grunt.config.get('cfg')
                    }
                },
                src: 'src/client/index.html',
                dest: 'build/public/index.html'
            }
        },

        useminPrepare: {
            assemble: {
                src: 'build/public/index.html'
            }
        },
        
        usemin: {
            assembleHtml: {
                options: {type: 'html'},
                src: 'build/public/index.html'
            },
            assembleCss: {
                options: {type: 'css'},
                src: 'build/public/**/*.css'
            },
            src: ['src/client/index.html'],
            dest: 'build/public/index.html'
        },

        copy: {
            assemble: {
                expand: true,
                cwd: 'src/client',
                src: [
                    '**/*.*',
                    '!**/*.{js,less,css,html}'
                ],
                dest: 'build/public/media',
                filter: 'isFile'
            }
        }
    };
};
