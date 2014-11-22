'use strict';
/**
 * @ngdoc controller
 * @name ng-twapp.deviceDetector.DeviceDetectorController
 * @description A controller for the nng-twappdeviceDetector module.
 */
angular.module('ng-twapp.deviceDetector')
  .controller('DeviceDetectorController', function ($scope, $window, deviceDetector) {
    $scope.deviceDetector = deviceDetector;

    $scope.$watch(
      function () {
        return $window.innerWidth;
      },
      function (newValue) {
        $scope.currentWidth = newValue;
        var type;
        if (newValue >= 1200) {
          type = 'Large Device';
        } else if (newValue >= 992) {
          type = 'Desktop';
        } else if (newValue >= 768) {
          type = 'Tablet';
        } else {
          type = 'Phone';
        }
        $scope.deviceType = type;
      }
    );

    $window.onresize = function () {
      $scope.$apply();
    };
  });
