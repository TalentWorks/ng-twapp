'use strict';
/**
 * @ngdoc factory
 * @name ng-twapp.auth-controllers
 * @description # auth-controllers
 */

angular.module('ng-twapp.auth')
  .controller('authController', ['$scope', function ($scope) {
    $scope.mesg = 'Not available yet';
//    authFactory.getToken($routeParams.code).then(function () {
//      console.log($location.search());
//      console.debug('$routeParams.code :: ', $routeParams.code);
//      if ($routeParams.code) {
//        $location.path('app/scripts/auth-module/views/authenticated.html').replace();
//      }
//    }, function (error) {
//      $scope.errorMessage = "Token not available.";
//    });

  }]);

