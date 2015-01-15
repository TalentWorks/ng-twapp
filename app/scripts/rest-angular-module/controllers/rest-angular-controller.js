'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc controller
 * @name ng-twapp.RestAngularController
 * @description # RestAngularController
 */

angular.module('ng-twapp.RestAngular')
  .controller('RestAngularController', function ($scope, restNgService) {

    // GET All Users form restNgService
    $scope.users = restNgService.getAllUsers().then(function (data) {
      $scope.users = data;
      console.log($scope.users);
    });

    // GET One from restNgSErvice
    $scope.user = restNgService.getOneUser('809d4325-de7f-4b71-a845-6a8273155407').then(function (data) {
      $scope.user = data;
      console.log($scope.user);
    });

    //POST new user
    $scope.submit = function () {
      restNgService.postNewUser('Che').then(function () {
        console.log('Posted');
      });
    };


  });
