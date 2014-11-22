'use strict';
/**
 * @ngdoc SpinnerController
 * @name <%= appName %>.SpinnerController
 * @description SpinnerController
 */

angular.module('<%= appName %>')
  .controller('SpinnerController', function($rootScope, $scope, $timeout) {
    $rootScope.loading = false;
    $rootScope.loadSpinner = function() {
      $rootScope.loading = true;
      $timeout(function() {
        $rootScope.loading = false;
      }, 2000);
    };
  });
