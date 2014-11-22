'use strict';
/**
 * @ngdoc module
 * @name  ng-twapp
 * @description # ng-twapp main app module loader
 */
angular.module('ng-twapp').config(function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

  localStorageServiceProvider.setPrefix('ng-twapp');
  localStorageServiceProvider.setStorageType('localStorage');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: '/views/home.html'
  });

  $urlRouterProvider.otherwise('/');
});
