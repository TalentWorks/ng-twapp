'use strict';
/**
 * @ngdoc module
 * @name ng-twapp
 * @file auth-config.js
 * @description # ng-twapp auth module loader
 */

angular.module('ng-twapp.auth', [])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('auth', {
      url: '/auth',
      templateUrl: 'scripts/auth-module/views/auth.html',
    });

    $urlRouterProvider.otherwise('/');
  });
