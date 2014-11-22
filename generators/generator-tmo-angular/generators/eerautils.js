'use strict';
var chalk = require('chalk');
var path = require('path');
var fs = require('fs');
var _ = require('underscore');
var naming = require('./naming');

_.str = require('underscore.string');
_.inflections = require('underscore.inflections');

_.mixin(_.str.exports());
_.mixin(_.inflections);

var getTemplateData = function(that) {
	var templateName = naming.toDasherized(that.name);
	var moduleName = that.appName;
	var module = '';
	if (that.selectedModule) {
		module =  _.camelize(naming.removeTypeSuffix(naming.toDasherized(naming.extractNamespaceDir(that.selectedModule))));
	}
	if (module) {
		moduleName += '.' + module;
	}
    return {
        name: _.camelize(templateName),
        moduleName: moduleName,
        dasherizedName: templateName,
        capitalizedName: _.capitalize(_.camelize(templateName)),
        humanizedName: _.humanize(naming.toDasherized(templateName)),
        appName: that.appName,
        module: module
    };
};

var addModuleToAppJS = function(moduleName, appName) {
    var appJs = path.join('app', 'scripts', 'app.js');

    rewriteFile({
        file: appJs,
        between: {
            start: '.module',
            end: '])'
        },
        delimiter: ',',
        splicable: ['\'' + moduleName + '\'']
    });
};

var askAboutName = function(that, type, done) {
    if (that.name === type) {
        that.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the new ' + type + '?'
            }
        ], function(props) {
            that.name = props.name;
			if (!that.name) {
				throw 'A name is required!';
			}
            done();
        }.bind(that));
    } else {
        done();
    }
};

var askAboutModule = function(that, type, done) {
    var moduleNames = that.modules;
    if (moduleNames.length !== 0) {
        if (that.options.module && moduleNames.indexOf(that.options.module) !== -1) {
            that.selectedModule = naming.toModuleFileName(naming.toDasherized(that.options.module));
            done();
        } else {
            that.prompt([
                {
                    type: 'list',
                    name: 'module',
                    message: 'Which module should contain ' + type + ' ' + that.name + '?',
                    choices: moduleNames
                }], function(props) {
				var selectedModule = naming.normalizedName(props.module);
				selectedModule = naming.extractObjectName(selectedModule);
				selectedModule = naming.toDasherized(selectedModule);
                that.selectedModule = naming.toModuleFileName(selectedModule);
                done();
            }.bind(that));
        }
    } else {
        that.log(chalk.yellow('WARN: Application ' + ' doesn\'t have any modules yet.'));
    }
};

var askAboutSharedModule = function(that, type, done) {
    if (that.selectedSharedModule === undefined) {
        that.prompt([
            {
                type: 'input',
                name: 'selectedSharedModule',
                message: 'What is the name of the shared module?',
				default: 'core-module'
            }
        ], function(props) {
			var selectedModule = naming.normalizedName(props.selectedSharedModule);
			selectedModule = naming.extractObjectName(selectedModule);
			selectedModule = naming.toDasherized(selectedModule);
			that.selectedSharedModule = naming.toModuleFileName(selectedModule);
            done();
        }.bind(that));
    } else {
        done();
    }
}

var objectifyString = function(itemString) {
    var items = itemString.split(';');
    var i = 0;
    var partitions = _.partition(items, function() {
        i++;
        return i % 2 === 1;
    });
    return _.object(partitions[0], partitions[1]);
};

var createComponent = function(that, type, test, data) {
    var componentDest = naming.toModuleFileName(naming.extractNamespaceDir(that.selectedModule));
    var dasherizedComponentName = naming.toDasherizedFileName(that.name);
    var moduleDir = path.join(that.moduleDir, componentDest);
    var destDir = moduleDir;
    var destTestDir = path.join('test', 'unit', componentDest);
    var templateData = getTemplateData(that);
    if (!!data) {
        templateData = _.extend(templateData, data);
    }
    if (that.options.example !== '' && that.options.example !== undefined) {
        var exampleData = objectifyString(that.options.exampleData);
        templateData = _.extend(templateData, exampleData);
    }
    var suffix = {
        template: '.js_',
        component: '.js',
        test: '.spec.js'
    };
    var example = that.options.example || '';
    if (type !== 'view') {
        that.template(
            path.join(type, example + type + suffix.template),
            path.join(destDir, type+'s', dasherizedComponentName + suffix.component),
            templateData
        );
        if (test) {
            that.template(
                path.join(type, example + type + '.spec' + suffix.template),
                path.join(destTestDir, dasherizedComponentName + suffix.test),
                templateData
            );
        }
    } else {
        that.template(
            path.join(type, example + type + '.html_'),
            path.join(destDir, type+'s', naming.removeTypeSuffix(dasherizedComponentName) + '.html'),
            templateData
        );
    }
};

var stringifyObject = function(item) {
    var pairs = _.pairs(item);
    var stringifiedPairs = [];
    _.each(pairs, function(pair) {
        stringifiedPairs.push(pair.join(';'));
    });
    return stringifiedPairs.join(';');
};

function escapeRegExp (str) {
    return str.toString().replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

function rewrite (args) {
    var re = new RegExp(args.splicable.map(function(line) {
        return '\\s*' + escapeRegExp(line);
    }).join(args.delimiter || '\n'));

    if (re.test(args.haystack)) {
        return args.haystack;
    }

    var ending = '\n';

    args.haystack = args.haystack.replace(/\r\n/g, ending);

    var lines = args.haystack.split(ending);
    var spaces = 0;
    var spaceStr = '';
    if (args.needle) {
        var otherwiseLineIndex = 0;
        var searchFor = args.needle;
		var needleFound = false;
        lines.forEach(function(line, i) {
            if (line.indexOf(searchFor) !== -1) {
                otherwiseLineIndex = i;
				needleFound = true;
            }
        });
		if (!needleFound) {
			console.error('WARNING - Needle was not found!!! This generator requires this needle to exist: ' + args.needle);
			return;
		}
        spaceStr = '';
        var leaderLine = lines[otherwiseLineIndex];
        var len = leaderLine.length;
        for (spaces = 0; spaces < len && ' \t'.indexOf(leaderLine.charAt(spaces).toString()) >= 0; ++spaces) {
            spaceStr += (leaderLine.charAt(spaces) === '\t') ? '    ' : ' ';
        }

        lines.splice(otherwiseLineIndex, 0, args.splicable.map(function(line) {
            return spaceStr + line;
        }).join(ending));
    } else if (args.between) {
        var delimiter = args.delimiter;
        var docLines = args.haystack.split(ending);
        var start = 0;
        var end = 0;
        docLines.some(function(line, i) {
            start = i;
            return line.indexOf(args.between.start) !== -1;
        });
        docLines.some(function(line, i) {
            end = i;
            return end > start && line.indexOf(args.between.end) !== -1;
        });
        spaces = docLines[start].search(/\w/) - 1;
        spaceStr = '';
        for (var s = 0; s < spaces + 4; s++) {
            spaceStr += ' ';
        }
        if (args.addCommaAfter !== undefined) {
            if (docLines[end - 1].indexOf(args.addCommaAfter) === -1) {
                docLines[end - 1] = docLines[end - 1] + ',';
            }
        }

        var before = docLines.slice(0, start + 1).join(ending);
        var after = docLines.slice(end).join(ending);
        var interim = [];
        docLines.slice(start + 1, end).forEach(function(line) {
            //TODO: it should ignore empty lines, otherwise there is a single comma in empty line
            interim.push(line.replace(delimiter, ''));
        });
        args.splicable.forEach(function(line) {
            interim.push(spaceStr + line);
        });
        return before + ending + interim.join(delimiter + ending) + ending + after;
    }

    return lines.join('\n');
}

function rewriteFile (args) {
    args.path = args.path || process.cwd();
    var fullPath = path.join(args.path, args.file);

    args.haystack = fs.readFileSync(fullPath, 'utf8');
    var body = rewrite(args);
    fs.writeFileSync(fullPath, body);
}

function askIfShared(that, type, def) {
	if (that.shared === undefined) {
		var cb = that.async();
		that.prompt([
			{
				type: 'confirm',
				name: 'shared',
				message: 'Will this ' + type + ' be shared?',
				default: def
			}
		], function(props) {
			that.shared = props.shared;
			cb();
		}.bind(that));
	}
}

module.exports = {
	getTemplateData: getTemplateData,
    addModuleToAppJS: addModuleToAppJS,
    askAboutName: askAboutName,
    askAboutModule: askAboutModule,
    createComponent: createComponent,
    rewrite: rewrite,
    rewriteFile: rewriteFile,
    stringifyObject: stringifyObject,
    objectifyString: objectifyString,
	askIfShared: askIfShared,
	askAboutSharedModule: askAboutSharedModule
};

