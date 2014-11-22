'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');
var chalk = require('chalk');
var eeraUtils = require('../eerautils');
var naming = require('../naming');
var chalk = require('chalk');
var fs = require('fs');
var _ = require('underscore');
_.str = require('underscore.string');

_.mixin(_.str);
module.exports = yeoman.generators.NamedBase.extend({
    constructor: function(args, options) {
	    if (args.length === 0) {
           args.push('update');
        }
        yeoman.generators.NamedBase.apply(this, arguments);
        this.sourceRoot(path.join(__dirname, '../templates'));
		this.log(chalk.magenta('This is your friendly, neighborhood Yeoman generator. Updating or creating your .yo-rc file for your TMO application...'));
    },
	askAboutRouting: function () {
		if (!this.config.get('routing')) {
			var cb = this.async();
			this.routingNg = false;
			this.routingUi = false;
			this.prompt([
				{
					type: 'list',
					name: 'routing',
					message: 'What is your routing?',
					choices: [
						'angular-ui-router',
						'ngRoute'
					],
					default: 'angular-ui-router'
				}
			], function (props) {
				this.config.set('routing', props.routing);
				cb();
			}.bind(this));
		}
    },
	reportRouting: function() {
		this.log(chalk.green('Set routing to ' + this.config.get('routing')));
	},
	setModuleDir: function() {
		if (!this.config.get('moduleDir')) {
			this.config.set('moduleDir', path.join('app', 'scripts'));
		}
	},
	setSrcDir: function() {
		if (!this.config.get('srcDir')) {
			this.config.set('srcDir', 'app');
		}
	},
	getAppName: function() {
		if (!this.config.get('appName')) {
			//Try to get the app name from app.js:
			var text;
			try {
				text = String(fs.readFileSync(path.join('app','scripts', 'app.js'))).replace(/[ \n\r\t'"]/g,'');
				text = text.replace(/[\s\S]*?\.module\((.*?),[\s\S]*/, '$1');
			}
			catch (e) {
				text = '';
			}
			//Else ask for italics
			if (!text) {
				var cb = this.async();
				this.prompt([{
					type: 'input',
					name: 'appName',
					message: 'What is the app module name?'
				}], function(props) {
					this.config.set('appName', props.appName);
					cb();
				}.bind(this));
			}
			else {
				this.config.set('appName', text);
			}
			
		}
	},
	reportAppName: function() {
		var name = this.config.get('appName');
		if (!name) {
			this.log(chalk.red('WARNING - your appName is empty!'));
		}
		else {
			this.log(chalk.green('The app module name is set to ' + name));
		}
		
	},
	getModules: function() {
		var moduleDirs = fs.readdirSync(path.join('app','scripts'));
		var modules = [];
		var module;
		for (var i in moduleDirs) {
			module = moduleDirs[i];
			var stat = fs.statSync(path.join('app', 'scripts', module));
			if (stat.isDirectory() && module !== 'shared-modules' && module !== 'vendor') {
				modules.push(naming.toJavaScriptName(naming.removeTypeSuffix(module)));
			}
		}
		this.config.set('modules', modules);
		if (!modules) {
			this.log(chalk.green('No modules were found in your application (app\\scripts)'));
		}
		else {
			this.log(chalk.green('Found these modules in your application: ' + modules));
		}
	},
	save: function() {
		this.config.forceSave();
		this.log(chalk.yellow('Saved! Check your .yo-rc file to view all that has been configured.'));
	}
});