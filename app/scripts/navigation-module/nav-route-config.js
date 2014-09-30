/**
 * Created by josefsosa on 9/29/14.
 */
'use strict';

angular.module('ng-twapp')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('about', {
    url: '/about',
    templateUrl: '/scripts/main-module/view/main.html',
    controller: 'MainCtrl'
  });
  $stateProvider.state('contacts', {
    url: '/contacts',
    templateUrl: '/scripts/main-module/view/main.html',
    controller: 'MainCtrl'
  });

  $urlRouterProvider.otherwise('/');
});