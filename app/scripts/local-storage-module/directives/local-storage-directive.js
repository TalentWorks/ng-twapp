'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc directive
 * @name ng-twapp.localstore
 * @description # directive
 */
angular.module('ng-twapp.localstore').directive('localstoreDirective', function () {
  return {
    restrict: 'E',
    templateUrl: 'scripts/navigation-module/views/top-navigation.html',
    replace: true
  };
});
