'use strict';
/**
 * @ngdoc module
 * @name ng-twapp.modal
 * @file nav-route-config.js
 * @description # ng-twapp.modal nav-route-config.js main app module loader
 */

angular.module('ng-twapp.modal', [])
  .config(function ($stateProvider, $httpProvider, $urlRouterProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://54.174.36.93:8888/api/');

  });
