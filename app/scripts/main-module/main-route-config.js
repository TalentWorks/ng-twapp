'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc config
 * @name ng-twapp
 * @description # Main module configuration
 */


angular
    .module('ng-twapp')
    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider.state('main', {
        url: '/main',
        templateUrl: '/scripts/main-module/view/main.html',
        controller: 'mainCtrl'

      });
      $urlRouterProvider.otherwise('/');
    });