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
            args.push('spec');
        }
        yeoman.generators.NamedBase.apply(this, arguments);
        this.sourceRoot(path.join(__dirname, '../templates'));
        this.appName = this.config.get('appName');
        this.appDir = this.config.get('appDir');
		this.modules = this.config.get('modules');
    },
    askForSpecName: function() {
        var cb = this.async();
        eeraUtils.askAboutName(this, 'spec', cb);
    },
	askIfShared: function() {
		//Set this.shared
		eeraUtils.askIfShared(this, 'spec', false);
	},
    askAboutModule: function() {
		var cb = this.async();
		if (this.shared) {
			//Set this.selectedSharedModule
			eeraUtils.askAboutSharedModule(this, 'spec', cb);
		}
		else {
			//Set this.selectedModule
			eeraUtils.askAboutModule(this, 'spec', cb);
		}
    },
    createSpec: function() {
		var name = naming.toDasherizedFileName(this.name) + '.spec.js';
		var destPath;
		if (this.shared) {
			destPath = path.join('test', 'unit', 'shared-modules', this.selectedSharedModule, name);
		}
		else {
			destPath = path.join('test', 'unit', this.selectedModule, name);
		}
        this.template('spec/spec.js', destPath);
    }
});