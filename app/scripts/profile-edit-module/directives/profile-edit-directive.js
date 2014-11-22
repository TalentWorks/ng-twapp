'use strict';
/**
 * @ngdoc directive
 * @name ng-twapp.commonHeader
 * @description # Common Header navigation directive
 */
angular.module('ng-twapp.profileEdit')
  .directive('profilDirective', function () {
    return {
      restrict: 'E',
      templateUrl: '/scripts/login-module/views/form.html'
    };
  });
