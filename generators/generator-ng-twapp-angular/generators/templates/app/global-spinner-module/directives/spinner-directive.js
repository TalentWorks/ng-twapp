'use strict';
/**
 * @ngdoc spinnerDirective
 * @name <%= appName %>.spinnerDirective
 * @description # spinnerDirective directive
 */
angular.module('<%= appName %>')
  .directive('spinnerDirective', function() {
    return {
      restrict: 'E',
      templateUrl: 'scripts/shared-modules/global-spinner-module/views/spinner.html'
    };
  });
