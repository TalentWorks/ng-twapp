'use strict';
/**
 * @ngdoc directive
 * @name ng-twapp.profile
 * @description # profile directive
 */
angular.module('ng-twapp.profile')
  .directive('profileDirective', function () {
    return {
      restrict: 'E',
      templateUrl: '/scripts/login-module/views/form.html'
    };
  });
