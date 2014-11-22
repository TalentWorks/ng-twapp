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
            args.push('provider');
        }

        yeoman.generators.NamedBase.apply(this, arguments);

        this.sourceRoot(path.join(__dirname, '../templates'));
        this.appName = this.config.get('appName');
        this.appDir = this.config.get('appDir');
        this.moduleDir = this.config.get('moduleDir');
        this.modules = this.config.get('modules');
    },
    askForProviderName: function() {
        var cb = this.async();
        eeraUtils.askAboutName(this, 'provider', cb);
    },
	askIfShared: function() {
		//Set this.shared
		eeraUtils.askIfShared(this, 'provider', true);
	},
    askAboutModule: function() {
		var cb = this.async();
		if (this.shared) {
			//Set this.selectedSharedModule
			eeraUtils.askAboutSharedModule(this, 'provider', cb);
		}
		else {
			//Set this.selectedModule
			eeraUtils.askAboutModule(this, 'provider', cb);
		}
    },
    createProvider: function() {
		this.name = naming.removeTypeSuffix(naming.toDasherizedFileName(this.name));
		var pathToScript, testFolder;
		var filename = this.name + '-provider.js';
		var testFilename = this.name + '-provider.spec.js';
		var templateData = eeraUtils.getTemplateData(this);
		if (this.shared) {
			pathToScript = naming.htmlPath('scripts', 'shared-modules', this.selectedSharedModule, 'services', filename);
			testFolder = naming.htmlPath('shared-modules', this.selectedSharedModule);
		}
		else {
			var moduleDest = naming.extractNamespaceDir(this.selectedModule);
			pathToScript = naming.htmlPath('scripts', moduleDest, 'services', filename);
			testFolder = moduleDest;
		}
        this.template(path.join('provider', 'provider.js_'), path.join('app', pathToScript), templateData);
		this.template(path.join('provider', 'provider.spec.js_'), path.join('test', 'unit', testFolder, testFilename), templateData);
    }
});