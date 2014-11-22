var _ = require('lodash');
var path = require('path');

module.exports = function(grunt) {
    var loadFiles = [];
    var config = grunt.file.readYAML('tasks/index.yml');

    /**
     * Register task aliases in `index.yml`
     */
    _.forEach(config.tasks, function(task, name) {
        if (task.run) {
            task.desc = (task.desc || 'Alias for:') + '\n - ' +
                grunt.log.wordlist(task.run, {separator: '\n - '}) + '\n';

            grunt.registerTask(name, task.desc, task.run);
        }
    });

    /**
     * Load task options from `tasks/options/[name].js`
     */
    _.forEach(config.tasks, function(task, name) {
        var filename = path.join('tasks/options', name + '.js');

        if (grunt.file.exists(filename)) {
            grunt.config.merge(require(path.resolve(filename))(grunt));
        }
    });
};
