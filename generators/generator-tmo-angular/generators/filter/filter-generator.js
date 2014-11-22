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
            args.push('filter');
        }
        yeoman.generators.NamedBase.apply(this, arguments);
        this.sourceRoot(path.join(__dirname, '../templates'));
        this.appName = this.config.get('appName');
        this.appDir = this.config.get('appDir');
        this.moduleDir = this.config.get('moduleDir');
        this.modules = [];
        var self = this;
        this.config.get('modules').forEach(function(element) {
            self.modules.push(element);
        });
    },
    askForFilterName: function() {
        var cb = this.async();
        eeraUtils.askAboutName(this, 'filter', cb);
    },
	askIfShared: function() {
		//Set this.shared
		eeraUtils.askIfShared(this, 'filter', true);
	},
    askAboutModule: function() {
		var cb = this.async();
		if (this.shared) {
			//Set this.selectedSharedModule
			eeraUtils.askAboutSharedModule(this, 'filter', cb);
		}
		else {
			//Set this.selectedModule
			eeraUtils.askAboutModule(this, 'filter', cb);
		}
    },
	createFilter: function() {
		this.name = naming.removeTypeSuffix(this.name);
		var pathToScript, testFolder;
		var filename = naming.removeTypeSuffix(naming.toDasherizedFileName(this.name)) + '-filter.js';
		var testFilename = naming.removeTypeSuffix(naming.toDasherizedFileName(this.name)) + '-filter.spec.js';
		var templateData = eeraUtils.getTemplateData(this);
		if (this.shared) {
			pathToScript = naming.htmlPath('scripts', 'shared-modules', this.selectedSharedModule, 'filters', filename);
			testFolder = naming.htmlPath('shared-modules', this.selectedSharedModule);
		}
		else {
			var moduleDest = naming.extractNamespaceDir(this.selectedModule);
			pathToScript = naming.htmlPath('scripts', moduleDest, 'filters', filename);
			testFolder = moduleDest;
		}
        this.template(path.join('filter', 'filter.js_'), path.join('app', pathToScript), templateData);
		this.template(path.join('filter', 'filter.spec.js_'), path.join('test', 'unit', testFolder, testFilename), templateData);
    }
});