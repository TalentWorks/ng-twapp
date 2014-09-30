'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc controller
 * @name ng-twapp.logingCtrl
 * @description # logingCtrl
 */

angular.module('ng-twapp')
    .controller('loginCtrl', function ($scope, $rootScope, $http, $location) {
      // we will store all of our form data in this object
      $scope.formData = {};

      // function to process the form
      $scope.processForm = function () {

        alert('Created User! ' + $scope.formData.name);
      };
    });