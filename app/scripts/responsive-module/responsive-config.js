'use strict';
/**
 * @ngdoc module
 * @name ng-twapp
 * @file responsive-config.js
 * @description # ng-twapp responsive module loader
 */

angular.module('ng-twapp.responsive', [])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('responsive', {
      url: '/responsive',
      templateUrl: 'scripts/responsive-module/views/responsive.html'
    });

    $urlRouterProvider.otherwise('/');
  });
