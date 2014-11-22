'use strict';
/**
 * @ngdoc directive
 * @name ng-twapp.responsiveDirective
 * @description # responsive directive
 */
angular.module('ng-twapp.responsive').directive('responsiveDirective', function () {
  return {
    restrict: 'E',
    templateUrl: 'scripts/responsive-module/views/responsive.html'
  };
});
