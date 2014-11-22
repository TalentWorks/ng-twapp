'use strict';
/**
 * @ngdoc module
 * @name ng-twapp.restAngular
 * @file rest-angular-config.js
 * @description # nng-twapprestAngular app module
 */

angular.module('ng-twapp.RestAngular', [])
  .config(function ($stateProvider, $httpProvider, $urlRouterProvider, RestangularProvider) {

    //RestangularProvider.setBaseUrl('searches', 'http://google.com/');
    RestangularProvider.setBaseUrl('http://54.174.36.93:8888/api/');
    console.log(RestangularProvider);

  });
