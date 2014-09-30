/**
 * Created by josefsosa on 9/28/14.
 */
'use strict';

angular
    .module('ng-twapp')
    .config(function ($routeProvider) {
      $routeProvider
          .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainCtrl'
          })
          .when('/about', {
            templateUrl: 'views/main.html',
            controller: 'mainCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
    });