module.exports = function(grunt) {
    function middleware(connect) {
        grunt.log.writeln(
            'Serving ' + String(process.env.NODE_ENV).cyan + ' env'
        );

        switch (process.env.NODE_ENV) {
            case 'dev':
                return [
                    connect.static('src/client'),
                    connect().use('/bower_components', connect.static('bower_components'))
                ];

            case 'stage':
                return [connect.static('build/public')];

            default:
            case 'build':
                return [connect.static('build/optimized')];
        }
    }

    return {
        connect: {
            serve: {
                options: {
                    open: true,
                    livereload: true,
                    hostname: 'localhost',
                    port: 8180,
                    middleware: middleware
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },

            all: {
                files: 'src/client/**/*'
            }
        }
    };
};
