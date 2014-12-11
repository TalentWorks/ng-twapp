'use strict';
/**
 * @ngdoc controller
 * @name ng-twapp.login.LoginController
 * @description # LoginController
 */
angular.module('ng-twapp.login').controller('LoginController', function ($scope, LoginService) {
  // we will store all of our form data in this object
  $scope.formData = {};

  $scope.createUser = function (){
    LoginService.postUser($scope.formData);
    console.log($scope.formData);
  };
});
