'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc directive
 * @name ng-twapp.commonFooterNav
 * @description # Common footer navigation directive
 */
angular.module('ng-twapp')
    .directive('commonFooterNav', function () {
      return {
        restrict: 'E',
        templateUrl: 'scripts/footer-module/views/footer-navigation.html',
      };
    });