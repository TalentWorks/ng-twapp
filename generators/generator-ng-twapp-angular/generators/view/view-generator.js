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
            args.push('view');
        }
        yeoman.generators.NamedBase.apply(this, arguments);
        this.sourceRoot(path.join(__dirname, '../templates'));
        this.appName = this.config.get('appName');
        this.moduleDir = this.config.get('moduleDir');
        this.modules = this.config.get('modules');
		this.shared = options.shared;
    },
	askForViewName: function() {
        var cb = this.async();
        eeraUtils.askAboutName(this, 'view', cb);
    },
	askIfShared: function() {
		//Set this.shared
		eeraUtils.askIfShared(this, 'view', false);
	},
    askAboutModule: function() {
		var cb = this.async();
		if (this.shared) {
			//Set this.selectedSharedModule
			eeraUtils.askAboutSharedModule(this, 'view', cb);
		}
		else {
			//Set this.selectedModule
			eeraUtils.askAboutModule(this, 'view', cb);
		}
    },
    createView: function() {
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
});