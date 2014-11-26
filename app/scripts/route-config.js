'use strict';
/**
 * @ngdoc module
 * @name  ng-twapp
 * @description # ng-twapp main app module loader
 */
angular.module('ng-twapp').config(function ($stateProvider, $urlRouterProvider, localStorageServiceProvider, RestangularProvider) {

  RestangularProvider.setBaseUrl('http://54.174.36.93:8888/api/');

  localStorageServiceProvider.setPrefix('ng-twapp');
  localStorageServiceProvider.setStorageType('localStorage');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: '/views/home.html'
  });

  $urlRouterProvider.otherwise('/');

});
