'use strict';
var chalk = require('chalk');
var path = require('path');
var _ = require('underscore');

_.str = require('underscore.string');
_.inflections = require('underscore.inflections');
_.mixin(_.str.exports());
_.mixin(_.inflections);

//Non-exported functions
String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

//Exported functions
function removeEnding(name, ending) {
	if (name.toLowerCase().endsWith(ending)) {
		name = name.substring(0, name.length - ending.length);
	}
	return name;
};
var toJavaScriptName = function(name) {
    var classNameForm = _(name.toString()).chain().clean().trim().dasherize().slugify().classify().value();
    return classNameForm.substr(0, 1).toLowerCase() + classNameForm.substr(1);
};

var toUpperCamelCase = function(name) {
    var classNameForm = _(name.toString()).chain().clean().trim().dasherize().slugify().classify().value();
    return classNameForm.substr(0, 1).toUpperCase() + classNameForm.substr(1);
};

var toDasherized = function(name) {
    name = name.toString().replace(/\./g, '-');
    name = toJavaScriptName(name);
    name = name.substr(0, 1).toLowerCase() + name.substr(1);
    return _.dasherize(name);
};

var toJavaScriptPlural = function(name) {
    name = _.pluralize(toDasherized(name));
    return toJavaScriptName(name);
};

var toJavaScriptSingular = function(name) {
    name = _.singularize(toDasherized(name));
    return toJavaScriptName(name);
};

var toDasherizedFileName = function(name) {
    if (name.toString().indexOf('.') !== -1) {
        return name;
    } else {
        return toDasherized(name);
    }
};

var toModuleFileName = function(name) {
	return removeTypeSuffix(name) + '-module';
};

var toControllerFileName = function(name) {
	return removeTypeSuffix(name) + '-controller';
};

var toServiceFileName = function(name) {
	return removeTypeSuffix(name) + '-service';
};

var toFactoryFileName = function(name) {
	return removeTypeSuffix(name) + '-factory';
};

var htmlPath = function() {
    var args = Array.prototype.slice.call(arguments);
    return path.join.apply(this, args).replace(/\\/g, '/');
};

function removeTypeSuffix(name) {
	//Using the for loop as a quick solution to handle situations like name-module-controller
	for (var i = 0; i < 5; i++) {
		name = removeEnding(name, 'controller');
		name = removeEnding(name, 'ctrl');
		name = removeEnding(name, 'module');
		name = removeEnding(name, 'directive');
		name = removeEnding(name, 'factory');
		name = removeEnding(name, 'provider');
		name = removeEnding(name, 'service');
		name = removeEnding(name, 'filter');
		name = removeEnding(name, '-');
	}
	return name;
};

function normalizedName(nameWithNamespace) {
    var segments = nameWithNamespace.split(/[./]/);
    var result = segments.map(function(val) {return toJavaScriptName(val);}).join('.');
    return result;
}

function extractObjectName(nameWithNamespace) {
    var segments = nameWithNamespace.split(/[./]/);
    var result = segments[segments.length - 1];
    return result;
}

function extractNamespaceDir(nameWithNamespace) {
    var segments = nameWithNamespace.split(/[./]/);
    var result = segments.map(function(val) {return toDasherized(val);}).join('/');
    return result;
}

function toClassName(name) {
    return _.classify(toDasherized(name));
}

module.exports = {
	removeEnding: removeEnding,
    toJavaScriptName: toJavaScriptName,
	toUpperCamelCase: toUpperCamelCase,
    toJavaScriptSingular: toJavaScriptSingular,
    toJavaScriptPlural: toJavaScriptPlural,
    toDasherized: toDasherized,
    toDasherizedFileName: toDasherizedFileName,
    toClassName: toClassName,
	toModuleFileName: toModuleFileName,
	toControllerFileName: toControllerFileName,
	toServiceFileName: toServiceFileName,
	toFactoryFileName: toFactoryFileName,
	
    htmlPath: htmlPath,
	
	removeTypeSuffix: removeTypeSuffix,
    normalizedName: normalizedName,
    extractObjectName: extractObjectName,
    extractNamespaceDir: extractNamespaceDir
};