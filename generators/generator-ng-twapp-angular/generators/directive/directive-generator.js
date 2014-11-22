'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');
var _ = require('underscore');
var _str = require('underscore.string');
var chalk = require('chalk');
var eeraUtils = require('../eerautils');
var naming = require('../naming');

_.mixin(_str);

module.exports = yeoman.generators.NamedBase.extend({
    constructor: function(args, options) {
        if (args.length === 0) {
            args.push('directive');
       }
        yeoman.generators.NamedBase.apply(this, arguments);
        this.sourceRoot(path.join(__dirname, '../templates'));
        this.appName = this.config.get('appName');
        this.appDir =  this.config.get('appDir');
        this.moduleDir = this.config.get('moduleDir');
        this.modules = [];
        var self = this;
        this.config.get('modules').forEach(function(element) {
            self.modules.push(element);
        });
   },
    askForDirectiveName: function() {
		//Set this.name
        var cb = this.async();
        eeraUtils.askAboutName(this, 'directive', cb);
    },
	askIfShared: function() {
		//Set this.shared
		eeraUtils.askIfShared(this, 'directive', true);
	},
    askAboutModule: function() {
		var cb = this.async();
		if (this.shared) {
			//Set this.selectedSharedModule
			eeraUtils.askAboutSharedModule(this, 'directive', cb);
		}
		else {
			//Set this.selectedModule
			eeraUtils.askAboutModule(this, 'directive', cb);
		}
    },
	askAboutDirectiveTemplate: function() {
		var cb = this.async();
		this.prompt([
			{
				type: 'confirm',
				name: 'separateTemplate',
				message: 'Would you like to generate the template in a separate file?',
				default: true
		   }
		], function(props) {
			this.separateTemplate = props.separateTemplate;
			cb();
		}.bind(this));
	},
    createDirective: function() {
		this.name = naming.removeTypeSuffix(naming.toDasherizedFileName(this.name));
		var pathToScript, testFolder, pathToPartial;
		var filename = this.name + '-directive.js';
		var testFilename = this.name + '-directive.spec.js';
		var templateData = eeraUtils.getTemplateData(this);
		templateData.separateTemplate = this.seperateTemplate;
		if (this.shared) {
			pathToScript = naming.htmlPath('scripts', 'shared-modules', this.selectedSharedModule, 'directives', filename);
			pathToPartial = naming.htmlPath('scripts', 'shared-modules', this.selectedSharedModule, 'views', this.name + '.html');
			testFolder = naming.htmlPath('shared-modules', this.selectedSharedModule);
		}
		else {
			var moduleDest = naming.extractNamespaceDir(this.selectedModule);
			pathToScript = naming.htmlPath('scripts', moduleDest, 'directives', filename);
			pathToPartial = naming.htmlPath('scripts', moduleDest, 'views', this.name + '.html');
			testFolder = moduleDest;
		}
        this.template(path.join('directive', 'directive.js_'), path.join('app', pathToScript), templateData);
		this.template(path.join('directive', 'directive.spec.js_'), path.join('test', 'unit', testFolder, testFilename), templateData);
		if (this.separateTemplate) {
			templateData.templateUrl = pathToPartial;
            this.template('directive/partial.html_', pathToPartial, templateData);
		}
    }
});
