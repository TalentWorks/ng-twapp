module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '..',

        frameworks: ['mocha','chai','sinon', 'chai-as-promised'],

        files: [
			'http://maps.googleapis.com/maps/api/js?libraries=weather,geometry,visualization&sensor=false&language=en&v=3.14',
			'bower_components/stacktrace-js/stacktrace.js',
			'bower_components/jquery/dist/jquery.js',
			'bower_components/angular/angular.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'bower_components/json3/lib/json3.js',
			'bower_components/angular-resource/angular-resource.js',
			'bower_components/angular-cookies/angular-cookies.js',
			'bower_components/angular-sanitize/angular-sanitize.js',
			'bower_components/angular-animate/angular-animate.js',
			'bower_components/angular-touch/angular-touch.js',
			'bower_components/bootstrap/dist/js/bootstrap.js',
			'bower_components/angular-ui-router/release/angular-ui-router.js',
			'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
			'bower_components/ngInfiniteScroll/build/ng-infinite-scroll.js',
			'bower_components/lodash/dist/lodash.compat.js',
      'bower_components/angular-rangeslider/angular.rangeSlider.js',
			'bower_components/angular-google-maps/dist/angular-google-maps.js',
			'bower_components/angular-local-storage/dist/angular-local-storage.js',
			'bower_components/ng-device-detector/ng-device-detector.js',
			'bower_components/angular-ui-select/dist/select.js',
            'bower_components/restangular/src/restangular.js',
            'app/scripts/app.js',
            'app/scripts/**/*-config.js',
            'app/scripts/**/*.js',
            'test/unit/**/*.js'
        ],

        exclude: ['test/karma.conf.js'],

        //pre-processor for collecting code coverage
        preprocessors: {
            'app/scripts/**/*.js': 'coverage'
        },

        // test results reporter to use
        // report on progress, collect coverage and junit reports
        reporters: ['progress', 'coverage', 'junit'],

        //use cobertura coverage report for jenkins integration
        coverageReporter: {
            type : 'html',
            dir : 'coverage-report/'
        },

        //collect junit report for jenkins integration
        junitReporter: {
            outputFile: 'coverage-report/junit.xml',
            suite: ''
        },

        // web server port
        port: process.env['KARMA_PORT'] || 8100,

        // cli runner port
        runnerPort: process.env['KARMA_RUNNER_PORT'] || 9100,

        // enable / disable colors in the output (reporters and logs)
        colors: process.env['KARMA_COLORS'] || true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari
        // - PhantomJS
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    })
};
