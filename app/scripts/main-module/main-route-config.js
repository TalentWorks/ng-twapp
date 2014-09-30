'use strict';
/**
 * Created by josefsosa on 9/29/14.
 */

angular
    .module('ng-twapp')
    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider.state('main', {
        url: '/main',
        templateUrl: '/scripts/main-module/view/main.html',
        controller: 'MainCtrl'

      });
      $urlRouterProvider.otherwise('/');
    });