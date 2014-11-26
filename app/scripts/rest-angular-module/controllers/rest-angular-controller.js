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
    $scope.user = restNgService.getOneUser('05e83b49-d5e7-4f96-95ff-f6b76389e7d5').then(function (data) {
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
