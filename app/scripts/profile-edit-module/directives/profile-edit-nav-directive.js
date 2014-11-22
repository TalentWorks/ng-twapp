'use strict';
/**
 * @ngdoc directive
 * @name ng-twapp.commonHeader
 * @description # Common Header navigation directive
 */
angular.module('ng-twapp.profileEdit')
  .directive('profileEditDirective', function () {
    return {
      restrict: 'E',
      templateUrl: '/scripts/profile-edit-module/views/profile-edit-nav.html',
      replace: true,
      transclude: true
    };
  });
