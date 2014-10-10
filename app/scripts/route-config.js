'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc module
 * @name  ng-twapp
 * @description # ng-twapp main app module loader
 */

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