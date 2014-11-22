'use strict';
/**
 * @ngdoc directive
 * @name ng-twapp.login.commonHeader
 * @description # Common Header navigation directive
 */
angular.module('ng-twapp.login').directive('LoginDirective', function () {
  return {
    restrict: 'E',
    templateUrl: '/scripts/login-module/views/form.html'
  };
});
