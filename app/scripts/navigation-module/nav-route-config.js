/**
 * Created by josefsosa on 9/29/14.
 */
'use strict';

angular.module('ng-twapp')
    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider.state('about', {
        url: '/about',
        templateUrl: '/scripts/main-module/view/main.html',
        controller: 'mainCtrl'
      });
      $stateProvider.state('contact', {
        url: '/contact',
        templateUrl: '/scripts/main-module/view/main.html',
        controller: 'mainCtrl'
      });

      $urlRouterProvider.otherwise('/');
    });