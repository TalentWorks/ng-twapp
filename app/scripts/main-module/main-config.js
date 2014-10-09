'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc config
 * @name ng-twapp
 * @description # Main module configuration
 */


angular
    .module('ng-twapp.main')
    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider.state('main', {
        url: '/main',
        templateUrl: '/scripts/main-module/views/main.html',
        controller: 'mainController'
      });
      $urlRouterProvider.otherwise('/');
    });