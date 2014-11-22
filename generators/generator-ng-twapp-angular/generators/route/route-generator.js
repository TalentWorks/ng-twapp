'use strict';

var yeoman = require('yeoman-generator');
var path = require('path');
var _ = require('underscore');
var _str = require('underscore.string');
var fs = require('fs');
var eeraUtils = require('../eerautils');
var naming = require('../naming');
var chalk = require('chalk');

_.mixin(_str);

module.exports = yeoman.generators.NamedBase.extend({
    constructor: function(args, options) {
        if (args.length === 0) {
            args.push('route');
        }
        yeoman.generators.NamedBase.apply(this, arguments);
        this.sourceRoot(path.join(__dirname, '../templates'));
        this.appName = this.config.get('appName');
        this.moduleDir = this.config.get('moduleDir');
        this.modules = this.config.get('modules');
        this.ctrlAndView = options.ctrlAndView;
		this.shared = options.shared;
		this.module = options.module;
        this.routing = this.config.get('routing');
    },
    askForRouteName: function() {
        var cb = this.async();
        if (this.routing === 'angular-ui-router') {
			this.routeType = 'state';
        } else {
			this.routeType = 'route';
        }
		eeraUtils.askAboutName(this, this.routeType, cb);
    },
	askForControllerName: function() {
        var cb = this.async();
        if (this.options.controller) {
            this.controllerName = this.options.controller;
            cb();
        } else {
            this.prompt([
            {
                type: 'input',
                name: 'controllerName',
                message: 'What is the ' + this.routeType + '\'s controller name?'
            }
            ], function(props) {
                this.controllerName = props.controllerName;
                cb();
            }.bind(this));
        }
	},
    askForView: function() {
        var cb = this.async();
        if (this.options.view) {
            this.viewName = this.options.view;
            cb();
        } else {
            this.prompt([
                {
                    type: 'input',
                    name: 'viewName',
                    message: 'What is the ' + this.routeType + '\'s view (full path)? i.e: ' + path.join('scripts', 'module', 'views', 'someView.html')
                }
            ], function(props) {
                this.viewName = props.viewName;
                cb();
            }.bind(this));
        }
    },
    askAboutStateUrl: function() {
        if (this.routing === 'angular-ui-router') {
            var cb = this.async();
            this.prompt([
                {
                    type: 'input',
                    name: 'stateUrl',
                    message: 'What is the url for the state?',
					default: this.module || 'my-url'
                }
            ], function(props) {
                this.stateUrl = props.stateUrl;
                cb();
            }.bind(this));
        }
    },
	askAboutRouteFilename: function() {
        if (this.filepath === undefined) {
            var cb = this.async();
			var routePath = path.join('app', 'scripts', 'route-config.js')
            this.prompt([
                {
                    type: 'input',
                    name: 'filepath',
                    message: 'What is the path to the ' + this.routeType + ' configuration? Make sure it contains //' + this.routeType + ':needle',
                    default: routePath
                }
            ], function(props) {
                this.filepath = props.filepath;
                cb();
            }.bind(this));
        }
    },
    addRoute: function() {
        var config = {};
        if (this.routing === 'ngRoute') {
            var pathName = this.name.replace(/'/g, '');
            while (pathName.charAt(0) === '/') {
                pathName = pathName.substr(1);
            }
			pathName = naming.toDasherized(pathName);
            config = {
                file: this.filepath,
                needle: '//route:needle',
                splicable: [
                    '.when(\'/' + pathName + '\', {',
                        '    templateUrl: \'' + this.viewName + '\',',
                        '    controller: \'' + this.controllerName + '\'',
                    '})'
                ]
            };
            this._writeToFile(config);
			this.log(chalk.yellow('Created route /' + pathName + '!'));
        }
		else if (this.routing === 'angular-ui-router') {
            var stateUrl = this.stateUrl.replace(/'/g, '');
            while (stateUrl.charAt(0) === '/') {
                stateUrl = stateUrl.substr(1);
            }
            var stateName = this.name.replace(/'/g);
            config = {
                file: this.filepath,
				needle: '//state:needle',
                splicable: [
                    '.state(\'' + stateName + '\', {',
                        '	url: \'/' + stateUrl + '\',',
                        '	templateUrl: \'' + this.viewName + '\',',
						'	controller: \'' + this.controllerName + '\'',
                    '})'
                ]
            };
            this._writeToFile(config);
			this.log(chalk.yellow('Created state ' + stateName + ' with url /' + stateUrl + '!'));
        }
    },
    _writeToFile: function(config) {
        try {
            eeraUtils.rewriteFile(config);
        } catch (e) {
            var message = chalk.yellow.bold('WARN: ') + chalk.bold('Could not write to file: ' + config.filepath + '. ');
            if (this.routing === 'ngRoute') {
                message += chalk.bold('Try adding route manually.');
            } else {
                message += chalk.bold('Try adding state manually.');
            }
            this.log(message);
        }
    }
});