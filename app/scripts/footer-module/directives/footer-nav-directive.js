'use strict';
/**
 * @ngdoc directive
 * @name ng-twapp.footer.commonFooterNav
 * @description # Common footer navigation directive
 */
angular.module('ng-twapp.footer').directive('commonFooterNav', function () {
  return {
    restrict: 'E',
    templateUrl: 'scripts/footer-module/views/footer-navigation.html'
  };
});
