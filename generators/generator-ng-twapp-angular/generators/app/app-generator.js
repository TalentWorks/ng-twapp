'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var _ = require('underscore');
var str = require('underscore.string');
var fs = require('fs');
var eeraUtils = require('../eerautils');
var naming = require('../naming');

_.mixin(str);

module.exports = yeoman.generators.Base.extend({

    constructor: function(args, options){
        this.pkg = require('../../package.json');
        yeoman.generators.Base.apply(this, arguments);
        this.sourceRoot(path.join(__dirname, '../templates'));
        this.appPath = options.env.cwd;
    },
	greetDeveloper: function (){
        this.log(yosay('Welcome to the Tmo AngularJS generator'));
        this.log(chalk.yellow('Generated project is modular. Structure is driven by application modules.\n'));
    },
	checkGeneratedBase: function () {
        var that = this;
        var cb = that.async();
        fs.exists(path.join('.yo-rc.json'), function (exists) {
            if (exists){
                that.yoConfig = that._getYoConfig();
                if (!that.yoConfig['generator-ng-twapp-angular']) {
                    that.invoke('tmo-angular:baseconfig', {}, cb);
                } else {
                    cb();
                }
            } else {
                that.invoke('tmo-angular:baseconfig', {}, cb);
            }
        });
    },
    getAppName: function () {
        this.yoConfig = this._getYoConfig();
		this.appName = this.yoConfig['generator-ng-twapp-angular'].appName;
        this.dasherizedAppName = naming.toDasherized(this.appName);
        this.humanizedAppName = _.humanize(this.dasherizedAppName);
    },
    askAboutBootstrap: function () {
        var cb = this.async();
        this.bootstrap3 = false;
        this.bootstrap2 = false;
        this.noBootstrap = false;
        this.prompt([
            {
                type: 'list',
                name: 'bootstrap',
                message: 'Would you like to include Bootstrap?',
                choices: [
                    'Yes - Bootstrap 3',
                    'Yes - Bootstrap 2',
                    'No'
                ]
            }
        ], function (props) {
            if (props.bootstrap === 'Yes - Bootstrap 3') {
                this.bootstrap3 = true;
            } else if (props.bootstrap === 'Yes - Bootstrap 2'){
                this.bootstrap2 = true;
            } else {
                this.noBootstrap = true;
            }
            cb();
        }.bind(this));
    },
    askAboutRouting: function () {
        var cb = this.async();
        this.routingNg = false;
        this.routingUi = false;
        this.prompt([
            {
                type: 'list',
                name: 'routing',
                message: 'What component would you like to use for routing?',
                choices: [
                    'angular-ui-router',
                    'ngRoute'
                ],
                default: 'angular-ui-router'
            }
        ], function (props) {
            this.config.set('routing', props.routing);
			if (props.routing === 'angular-ui-router') {
                this.routingUi = true;
            } else {
                this.routingNg = true;
            }
            cb();
        }.bind(this));
    },
    askForAngularModules: function () {
        this.angularModules = [
            {
                value: 'ngAnimate',
                name: 'angular-animate.js',
                checked: true
            },
            {
                value: 'ngResource',
                name: 'angular-resource.js',
                checked: true
            },
            {
                value: 'ngCookies',
                name: 'angular-cookies.js',
                checked: true
            },
            {
                value: 'ngTouch',
                name: 'angular-touch.js',
                checked: true
            },
            {
                value: 'ngSanitize',
                name: 'angular-sanitize.js',
                checked: true
            }
        ];
        var cb = this.async();

        var prompts = [
            {
                type: 'checkbox',
                name: 'angModules',
                message: 'Which Angular sub-modules would you like to include?',
                choices: this.angularModules
            }
        ];

        var self = this;

        this.prompt(prompts, function (props) {
            var hasMod = function (mod) {
                return props.angModules.indexOf(mod) !== -1;
            };

            var angMods = [];
			if (this.routingNg) {
				angMods.push('\'ngRoute\'');
			}
			else {
				angMods.push('\'ui.router\'');
			}
            var choices = prompts[0].choices;
            _.each(choices, function (choice) {
                var moduleName = choice.value;
                self[moduleName] = hasMod(moduleName);
                if (self[moduleName]) {
                    angMods.push("'" + moduleName + "'");
                }
            });

            if (angMods.length) {
                this.env.options.angularDeps = angMods;
            }

            cb();
        }.bind(this));
    },
    askForVendorModules: function (){
        var vendorModules = [
            {
                value: 'ngInfiniteScroll',
                name: 'ngInfiniteScroll',
                checked: true
            },
            {
                value: 'angularLocalStorage',
                name: 'angularlocal-storage',
                checked: true
            },
            {
                value: 'ngDeviceDetector',
                name: 'ng-device-detector',
                checked: true
            },
            {
                value: 'stacktraceJs',
                name: 'stacktrace-js',
                checked: true
            },
            {
                value: 'angularUiSelect',
                name: 'angular-ui-select',
                checked: true
            },
            {
                value: 'momentJS',
                name: 'moment.js',
                checked: false
            }
        ];
        var cb = this.async();

        var prompts = [
            {
                type: 'checkbox',
                name: 'venModules',
                message: 'Which additional libraries would you like to include?',
                choices: vendorModules
            }
        ];

        var self = this;

        this.prompt(prompts, function (props) {
            var hasMod = function (mod) {
                return props.venModules.indexOf(mod) !== -1;
            };

            var vendMods = [];
            var choices = prompts[0].choices;
            _.each(choices, function (choice) {
                var moduleName = choice.value;
                self[moduleName] = hasMod(moduleName);
                if (self[moduleName] && moduleName) {
                    vendMods.push("'" + moduleName + "'");
                }
            });

            if (vendMods.length) {
                this.env.options.vendorDeps = vendMods;
            }

            cb();
        }.bind(this));
    },
    askAboutGlobalSpinner: function() {
        var cb = this.async();
        this.prompt([
            {
                type: 'confirm',
                name: 'includeSpinner',
                message: 'Would you like to include a global busy spinner?',
                default: true
           }
        ], function(props) {
            this.includeSpinner = props.includeSpinner;
            cb();
        }.bind(this));
    },
    createConfigurationFiles: function () {
        this.copy('.bowerrc_', '.bowerrc');
        this.template('bower.json_', 'bower.json');
        this.template('karma.conf.js_', path.join('test', 'karma.conf.js'));
		this.copy('test.jshintrc_', path.join('test', '.jshintrc'));
    },
    configureNpmDependencies: function () {
        var packageJson = 'package.json';
        var templatePkg = require(path.join(this.sourceRoot(), '_package.json'));
        var devDeps = [];
        for (var key in templatePkg.devDependencies){
            if (templatePkg.devDependencies.hasOwnProperty(key)){
                devDeps.push('"' + key + '": ' + '"' + templatePkg.devDependencies[key] + '"');
            }
        }
        eeraUtils.rewriteFile({
            file: packageJson,
            between: {
                start: '"devDependencies": {',
                end: '}'
            },
            delimiter: ',',
            splicable: devDeps
        });
    },
    createApplicationFiles: function () {
        this.dasherizedAppName = naming.toDasherized(this.appName);
        this.destDir = 'app';
        this.destAppDir = path.join(this.destDir, 'scripts');
        this.template(path.join('app', 'index.html_'), path.join(this.destDir,'index.tpl.html'));
        this.copy(path.join('assets','favicon.ico'), path.join(this.destDir, 'favicon.ico'));
        this.template(path.join('app','app.module.js_'), path.join(this.destAppDir, 'app.js'));
		this.template(path.join('app','exception-handler.js_'), path.join(this.destAppDir, 'exception-handler.js'));

    },
    createGlobalSpinner: function() {
        if (this.includeSpinner) {
            this.template(path.join('app', 'global-spinner-module', 'spinner-config.js'), path.join(this.destAppDir, 'shared-modules', 'global-spinner-module', 'global-spinner-config.js'));
            this.template(path.join('app', 'global-spinner-module', 'controllers','spinner-module-controller.js'), path.join(this.destAppDir, 'shared-modules', 'global-spinner-module', 'controllers','spinner-controller.js'));
            this.template(path.join('app', 'global-spinner-module', 'directives','spinner-directive.js'), path.join(this.destAppDir, 'shared-modules', 'global-spinner-module', 'directives','spinner-directive.js'));
            this.template(path.join('app', 'global-spinner-module', 'services','spinner-http-interceptor-factory.js'), path.join(this.destAppDir, 'shared-modules', 'global-spinner-module', 'services','spinner-http-interceptor-factory.js'));
            this.template(path.join('app', 'global-spinner-module', 'views','spinner.html'), path.join(this.destAppDir, 'shared-modules', 'global-spinner-module', 'views','spinner.html'));
        }
    },
    createRoutingFiles: function () {
		var dest = path.join(this.destAppDir, 'route-config.js');
        if (this.routingUi){
            this.template(path.join('app','app.state.js_'), dest);
        } else if (this.routingNg){
            this.template(path.join('app','app.route.js_'), dest);
        }
    },
    saveConfiguration: function () {
        this.config.set('appName', this.appName);
        this.config.set('srcDir', this.destDir);
        this.config.set('moduleDir', this.destAppDir);
        this.config.set('karma', { conf: '.', base: this.destDir});
        this.config.set('modules', []);
        this.config.save();
    },
    gruntTaskFiles: function (){
        this.dasherizedAppName = naming.toDasherized(this.appName);
    },
    end: function (){
        var self = this;

        var enabledComponents = [];
        _.each(this.angularModules, function (module) {
            if (self[module.value]) {
                enabledComponents.push(module.name.replace(/([^\.]+)/, '$1/$1'));
            }
        });

        if (this.bootstrap3) {
            enabledComponents.push('bootstrap/dist/js/bootstrap.js');
        } else if (this.bootstrap2){
            enabledComponents.push('some version of bootstrap 2');
        }

        enabledComponents = [
            'angular/angular.js',
            'angular-mocks/angular-mocks.js'
        ].concat(enabledComponents).join(',');

        console.log('Enabled angular modules: ' + chalk.cyan(enabledComponents));
        this.config.set('angularComponents', enabledComponents);
        this.config.save();

        this._addAngularModsToAppJS();
        this.installDependencies({
            skipInstall: this.options['skip-install'],
            skipMessage: this.options['skip-message'],
            callback: this._injectDependencies.bind(this)
        });
    },
	_addAngularModsToAppJS: function() {
        if (!!this.env.options.angularDeps){
            var config = {
                file: path.join(this.destAppDir, 'app.js'),
                between: {
                    start: '.module(',
                    end: ']);'
                },
                delimiter: ',',
                addCommaAfter: ',',
                splicable: this.env.options.angularDeps
            };
            eeraUtils.rewriteFile(config);
        }
    },
	_injectDependencies: function () {

    },
	_injectModulesToAppJS: function() {
        if (this.routingUi) {
            eeraUtils.addModuleToAppJS('ui.router', this.appName);
        } else if (this.routingNg) {
            eeraUtils.addModuleToAppJS('ngRoute', this.appName);
        }
    },
    _getYoConfig: function () {
        return require(path.join(this.appPath, '.yo-rc.json'));
    },
});
