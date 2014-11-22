module.exports = function(grunt) {
    return {
        usemin: {
            optimizeHtml: {
                options: {type: 'html'},
                src: 'build/optimized/index.html'
            },
            optimizeCss: {
                options: {type: 'css'},
                src: 'build/optimized/**/*.css'
            }
        },

        clean: {
            optimize: {
                src: 'build/optimized'
            }
        },

        filerev: {
            optimize: {
                src: [
                    'build/optimized/**/*',
                    '!build/optimized/**/*.{ico,html}'
                ],
                filter: 'isFile'
            }
        },

        copy: {
            optimize: {
                expand: true,
                cwd: 'build/public',
                src: '**/*',
                dest: 'build/optimized'
            }
        },

        cssmin: {
            optimize: {
                expand: true,
                src: [
                    'build/optimized/media/**/*.css'
                ],
                ext: '.min.css',
                extDot: 'last'
            }
        },

        uglify: {
            optimize: {
                expand: true,
                src: 'build/optimized/media/**/*.js',
                ext: '.min.js',
                extDot: 'last'
            }
        },

        imagemin: {
            optimize: {
                expand: true,
                cwd: 'build/optimized/media',
                src: '**/*.{png,jpg,gif}',
                dest: 'build/optimized/media'
            }
        },

        concurrent: {
            minify: {
                tasks: [
                    'cssmin:optimize',
                    'uglify:optimize',
                    'imagemin:optimize'
                ]
            }
        }
    };
};
