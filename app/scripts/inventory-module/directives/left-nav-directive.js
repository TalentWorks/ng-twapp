'use strict';
/**
 * @ngdoc module
 * @name  ng-twapp.inventory
 * @description # ng-twapp inventory directive to display the list
 */
angular.module('ng-twapp.inventory').directive('leftNav', function () {
  return {
    restrict: 'E',
    templateUrl: 'scripts/inventory-module/views/left-nav.html',
    scope: {}
  };
});
