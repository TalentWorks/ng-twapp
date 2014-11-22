'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');
var chalk = require('chalk');
var eeraUtils = require('../eerautils');
var naming = require('../naming');

var _ = require('underscore');
_.str = require('underscore.string');

_.mixin(_.str);

module.exports = yeoman.generators.NamedBase.extend({
    constructor: function(args, options) {
        if (args.length === 0) {
           args.push('module');
        }

        this.ctrlAndView = options.ctrlAndView;

        yeoman.generators.NamedBase.apply(this, arguments);
        this.sourceRoot(path.join(__dirname, '../templates'));
        this.route = this.options.route;

        this.appName = this.config.get('appName');
        this.moduleDir = this.config.get('moduleDir');
        this.modules = this.config.get('modules');
        this.routing = this.config.get('routing');
    },

    askForModuleName: function() {
        var cb = this.async();
        eeraUtils.askAboutName(this, 'module', cb);
    },

    askAboutModuleComponents: function() {
        if (this.ctrlAndView === undefined) {
            var cb = this.async();
            this.prompt([
                {
                    type: 'confirm',
                    name: 'ctrlAndView',
                    message: 'Would you also like to create a controller and view?',
                    default: true
                }
            ], function(props) {
                this.ctrlAndView = props.ctrlAndView;
                cb();
            }.bind(this));
        }
    },

    createModule: function() {
        this.name = naming.removeTypeSuffix(naming.normalizedName(this.name));

        var camelModuleName = naming.extractObjectName(this.name);
        var dasherizedModuleDir = naming.extractNamespaceDir(this.name);

        var dasherizedModuleName = naming.toDasherized(camelModuleName);

        var destDir = path.join(this.moduleDir, naming.toModuleFileName(dasherizedModuleDir));

        var templateData = {
            name: this.name,
            appName: this.appName,
            moduleName: this.appName + '.' + _.camelize(this.name),
            urlName: dasherizedModuleName
        };

        this.template(
            path.join('module', 'module.js_'),
            path.join(destDir, dasherizedModuleName + '-config.js'),
            templateData
        );
		this.copy(path.join('app', 'core.less'), path.join('app', 'styles', 'less', naming.removeTypeSuffix(dasherizedModuleDir) + '-module.less'));
        this.modules.push(this.name);
        this.config.set('modules', this.modules);
        this.config.forceSave();
        var htmlNameWithPath = naming.htmlPath('scripts', naming.toModuleFileName(dasherizedModuleName), dasherizedModuleName + '-config.js');
        eeraUtils.addModuleToAppJS(this.appName + '.' + _.camelize(this.name), this.appName);
    },
    askAboutControllerName: function() {
        if (this.ctrlAndView) {
            var cb = this.async();
            if (this.options.controller) {
                this.controllerName = this.options.controller;
                cb();
            } else {
                this.prompt([
                    {
                        type: 'input',
                        name: 'controllerName',
                        message: 'What is the controller\'s name?',
                        default: naming.toUpperCamelCase(naming.toControllerFileName(naming.toDasherized(naming.extractObjectName(this.name))))
                    }
                ], function(props) {
                    this.controllerName = props.controllerName;
                    cb();
                }.bind(this));
            }
        }
    },
    createController: function() {
        if (this.ctrlAndView) {
            var cbCtrl = this.async();
            this.invoke('tmo-angular:controller', {
                args: [this.controllerName],
                options: {
                    'module': this.name,
                    'example': this.example,
                    'exampleData': this.exampleData,
                    'appName': this.appName,
                    'withView': false,
					'shared': false
                }
            }, cbCtrl);

        }
    },
    askAboutViewName: function() {
        if (this.ctrlAndView) {
            var cb = this.async();
            if (this.options.view) {
                this.viewName = this.options.view;
                cb();
            } else {
                this.prompt([
                    {
                        type: 'input',
                        name: 'viewName',
                        message: 'What is the view\'s name?',
                        default: naming.toDasherized(naming.extractObjectName(this.name))
                    }
                ], function(props) {
                    this.viewName = props.viewName;
                    cb();
                }.bind(this));
            }
        }
    },
    createView: function() {
        if (this.ctrlAndView) {
            var cbView = this.async();
            this.invoke('tmo-angular:view', {
                args: [this.viewName],
                options: {
                    'module': this.name,
					'shared': false
                }
            }, cbView);
        }
    },
    addRoute: function() {
        if (this.ctrlAndView) {
            var moduleFolderName = naming.toModuleFileName(naming.toDasherized(this.name));
            var templateUrl = naming.htmlPath(path.join('scripts', moduleFolderName, 'views', naming.toDasherized(this.viewName) + '.html'));
			var cb = this.async();
			this.invoke('tmo-angular:route', {
				args: [this.name],
				options: {
					'module': this.name,
					'controller': this.controllerName,
					'view': templateUrl,
					'ctrlAndView': false,
					'shared': false
				}
			}, cb);
        }
    },
    end: function() {
        if (!this.ctrlAndView) {
            this.log(chalk.yellow('You can generate controller and view later using ' +
                     chalk.bold('\'yo tmo-angular:controller\'') + ' and ' +
                     chalk.bold('\'yo tmo-angular:view\'') + '.')
            );
        }
    }
});
