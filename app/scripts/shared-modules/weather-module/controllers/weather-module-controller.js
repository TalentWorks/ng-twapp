'use strict';
/**
 * @ngdoc controller
 * @name ng-twapp.calendarPickerModuleController
 * @description # calendarPickerModuleController
 */

angular.module('ng-twapp')
  .controller('WeatherController', function ($rootScope, $scope, weatherService) {
    $rootScope.loading = true;
    $scope.weather = weatherService.getWeather();


  });
