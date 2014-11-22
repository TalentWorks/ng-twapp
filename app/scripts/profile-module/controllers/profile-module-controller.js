'use strict';
/**
 * @ngdoc profileController
 * @name ng-twapp.profileController
 * @description # profileController
 */

angular.module('ng-twapp.profile')
  .controller('profileController', function ($scope) {
    // we will store all of our form data in this object
    $scope.formData = {};

    // function to process the form
    $scope.processForm = function () {

      //alert('Created User! ' + $scope.formData.name);
    };
  });
