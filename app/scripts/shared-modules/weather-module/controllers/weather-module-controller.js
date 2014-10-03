'use strict';
/**
 * @ngdoc controller
 * @name ng-twapp.calendarPickerModuleController
 * @description # calendarPickerModuleController
 */

angular.module('ng-twapp')
    .controller('WeatherCtrl', function ($scope, weatherService) {
    $scope.weather = weatherService.getWeather();
});
