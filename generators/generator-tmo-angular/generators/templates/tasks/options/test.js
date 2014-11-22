module.exports = function(grunt) {
    return {
        karma: {
            test: {
                configFile: 'config/karma.conf.js',
                singleRun: true
            }
        }
    };
};
