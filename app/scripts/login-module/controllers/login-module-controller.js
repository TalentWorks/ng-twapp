'use strict';
/**
 * @ngdoc controller
 * @name ng-twapp.logingCtrl
 * @description # logingCtrl
 */

angular.module('ng-twapp')
    .controller('loginCtrl', function ($scope, loginService, $http, $parse) {

      $http.get('http://localhost:9005/api/users').
          success(function(data) {
            var jsonData = angular.fromJson(data);
            console.log(jsonData);
            $scope.formData = jsonData;
          });
      console.log($scope.formData);

      $scope.fname = $parse($scope.formData);

      $scope.formData = {};


      $scope.users = loginService.getUsers;

      ///$scope.usersByID = loginService.getUsersById('5433698078b5d6674be9680c');
      //console.log($scope.usersByID);


      // function to process the form
      $scope.processForm = function () {

        alert('Created User! ' + $scope.formData.name);
      };
    });