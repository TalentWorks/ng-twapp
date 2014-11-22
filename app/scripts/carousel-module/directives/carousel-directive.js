'use strict';
angular.module('ng-twapp.carousel')
  .directive('tmCarousel', function () {
    return {
      restrict: 'E',
      transclude: true,
      scope: false,

      link: function (scope, el, attrs) {
        scope.tmInterval = attrs.interval;
      },

      templateUrl: function (elem, attrs) {
        return attrs.templateUrl;
      }
    };
  });
