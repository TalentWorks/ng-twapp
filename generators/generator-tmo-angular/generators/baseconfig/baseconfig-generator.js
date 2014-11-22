'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');
var yosay = require('yosay');
var _ = require('underscore');
var _str = require('underscore.string');
var naming = require('../naming');
_.mixin(_str);

module.exports = yeoman.generators.Base.extend({
    constructor: function (args, options) {
        yeoman.generators.Base.apply(this, arguments);
        this.sourceRoot(path.join(__dirname, '../templates'));
        this.appName = options.appName || path.basename(options.env.cwd);
    },
	
	askForAppName: function () {
		var cb = this.async();
		var prompts = [
			{
				name: 'appName',
				message: 'What would you like the application name to be?',
				default: path.basename(this.appName)
			}
		];

		this.prompt(prompts, function (props) {
			this.appName = naming.toJavaScriptName(props.appName);
			this.config.set('appName', this.appName);
			this.config.forceSave();
			cb();
		}.bind(this));
	},
	createDirectories: function (){
		this.mkdir('app/styles/less/common');
		this.copy('app/core.less', 'app/styles/less/core.less')
		this.copy('app/vendor.less', 'app/styles/less/vendor.less')
		this.mkdir('app/styles/fonts');
		this.mkdir('app/images');
		this.mkdir('app/scripts/shared-modules');
		this.mkdir('app/scripts/vendor');
		this.mkdir('test/unit');
		this.mkdir('test/e2e');
	},
	createPackageJson: function () {
		this.template('_package.json', 'package.json', {
			appName: this.appName,
			dasherizedAppName: naming.toDasherized(this.appName)
		});
	},
	createGruntTasks: function () {
		this.dasherizedAppName = naming.toDasherized(this.appName);
		this.template('gruntfile.js_', 'Gruntfile.js');
		var files = this.expand('grunt/*.js', {
			cwd: this.sourceRoot()
		});
		var that = this;
		files.forEach(function (file){
			that.copy(file, file);
		});
	},
	crateConfigFiles: function () {
		this.copy('.editorconfig_', '.editorconfig');
		this.copy('.jshintrc_', '.jshintrc');
		this.copy('.jscsrc_', '.jscsrc');
	}
});