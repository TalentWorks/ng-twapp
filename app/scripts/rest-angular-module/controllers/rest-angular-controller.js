'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc controller
 * @name ng-twapp.RestAngularController
 * @description # RestAngularController
 */

angular.module('ng-twapp.RestAngular')
  .controller('RestAngularController', function ($scope, restNgSerevice) {

    // GET All Users form restNgService
    $scope.users = restNgSerevice.getAllUsers().then(function (data) {
      $scope.users = data;
      console.log($scope.users);
    });

    // GET One from restNgSErvice
    $scope.user = restNgSerevice.getOneUser('05e83b49-d5e7-4f96-95ff-f6b76389e7d5').then(function (data) {
      $scope.user = data;
      console.log($scope.user);
    });

    // GET /api/users
    //var allUsers = Restangular.getList(); //Returns a collection of animals
    //console.log(allUsers);

    //UserService.getUsers().then(function(data){ $scope.users = data});
    //UserService.getUserContent().then(function(data){ $scope.content = data});

  });
