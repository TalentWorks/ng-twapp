'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc controller
 * @name ng-twapp.commonFooterCtrl
 * @description # commonFooterCtrl
 */

angular.module('ng-twapp')
    .controller('mainCtrl', function ($scope) {

      // function to process the form
      $scope.someAlert = function () {
        alert('Created User! ' + $scope.formData.name);
      };

    });