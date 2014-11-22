'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc directive
 * @name ng-twapp.nav.commonTopNav
 * @description # directive
 */
angular.module('ng-twapp.nav').directive('commonTopNav', function () {
  return {
    restrict: 'E',
    templateUrl: 'scripts/navigation-module/views/top-navigation.html',
    replace: true
  };
});
