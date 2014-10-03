'use strict';
/**
 * @ngdoc controller
 * @name mytmoNgApp.logingCtrl
 * @description # logingCtrl
 */

angular.module('mytmoNgApp')
    .controller('loginCtrl', function ($scope) {
      // we will store all of our form data in this object
      $scope.formData = {};

      // function to process the form
      $scope.processForm = function () {

        alert('Created User! ' + $scope.formData.name);
      };
    });