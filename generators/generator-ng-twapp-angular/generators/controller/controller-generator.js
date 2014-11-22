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
            args.push('controller');
        }
        yeoman.generators.NamedBase.apply(this, arguments);
        this.sourceRoot(path.join(__dirname, '../templates'));
		this.appName = this.config.get('appName');
        this.appDir = this.config.get('appDir');
        this.moduleDir = this.config.get('moduleDir');
        this.modules = this.config.get('modules');
		this.shared = options.shared;
    },
    askForControllerName: function() {
        var cb = this.async();
        eeraUtils.askAboutName(this, 'controller', cb);
    },
	askIfShared: function() {
		//Set this.shared
		eeraUtils.askIfShared(this, 'controller', false);
	},
    askAboutModule: function() {
		this.name = naming.toUpperCamelCase(naming.toControllerFileName(naming.toDasherizedFileName(this.name)));
		var cb = this.async();
		if (this.shared) {
			//Set this.selectedSharedModule
			eeraUtils.askAboutSharedModule(this, 'controller', cb);
		}
		else {
			//Set this.selectedModule
			eeraUtils.askAboutModule(this, 'controller', cb);
		}
    },
    askAboutView: function() {
        if (this.options.withView === undefined) {
            var cb = this.async();
            this.prompt([
                {
                    type: 'confirm',
                    name: 'withView',
                    message: 'Would you like to create a matching view?',
                    default: false
                }
            ], function(props) {
				this.withView = props.withView;
                cb();
            }.bind(this));
        }
    },
	createController: function() {
		var pathToScript, testFolder;
		var filename = naming.removeTypeSuffix(naming.toDasherizedFileName(this.name)) + '-controller.js';
		var testFilename = naming.removeTypeSuffix(naming.toDasherizedFileName(this.name)) + '-controller.spec.js';
		var templateData = eeraUtils.getTemplateData(this);
		if (this.shared) {
			pathToScript = naming.htmlPath('scripts', 'shared-modules', this.selectedSharedModule, 'controllers', filename);
			testFolder = naming.htmlPath('shared-modules', this.selectedSharedModule);
		}
		else {
			var moduleDest = naming.extractNamespaceDir(this.selectedModule);
			pathToScript = naming.htmlPath('scripts', moduleDest, 'controllers', filename);
			testFolder = moduleDest;
		}
        this.template(path.join('controller', 'controller.js_'), path.join('app', pathToScript), templateData);
		this.template(path.join('controller', 'controller.spec.js_'), path.join('test', 'unit', testFolder, testFilename), templateData);
    },
	createView: function() {
		if (this.withView) {
			this.name = naming.removeTypeSuffix(naming.toDasherizedFileName(this.name));
			var pathToScript;
			var filename = this.name + '.html';
			var templateData = eeraUtils.getTemplateData(this);
			if (this.shared) {
				pathToScript = naming.htmlPath('scripts', 'shared-modules', this.selectedSharedModule, 'views', filename);
			}
			else {
				var moduleDest = naming.extractNamespaceDir(this.selectedModule);
				pathToScript = naming.htmlPath('scripts', moduleDest, 'views', filename);
			}
			this.template(path.join('view', 'view.html_'), path.join('app', pathToScript), templateData);
		}
    }
});