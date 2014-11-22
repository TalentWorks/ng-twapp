'use strict';
/**
 * @ngdoc controller
 * @name ng-twapp.signature.SignatureController
 * @description A controller for the nng-twappsignature module.
 */
angular.module('ng-twapp.signature').controller('SignatureController', function ($scope) {
  $scope.clear = false;
  $scope.save = false;
  $scope.email = '';
  $scope.clearImage = function () {
    $scope.clear = true;
  };

  $scope.saveImage = function () {
    $scope.save = true;
  };
});
