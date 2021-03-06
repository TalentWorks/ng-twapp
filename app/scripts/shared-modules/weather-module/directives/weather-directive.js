'use strict';
/**
 * @ngdoc directive
 * @name ng-twapp.calendarDirective
 * @description # calendar picker directive
 */
angular.module('ng-twapp').directive('weatherIcon', function () {
  return {
    restrict: 'E', replace: true,
    scope: {
      cloudiness: '@'
    },
    controller: function ($scope) {
      $scope.imgurl = function () {
        var baseUrl = 'https://ssl.gstatic.com/onebox/weather/128/';
        if ($scope.cloudiness < 20) {
          return baseUrl + 'sunny.png';
        } else if ($scope.cloudiness < 90) {
          return baseUrl + 'partly_cloudy.png';
        } else {
          return baseUrl + 'cloudy.png';
        }
      };
    },
    template: '<div style="float:left"><img ng-src="{{ imgurl() }}"></div>'
  };
});
