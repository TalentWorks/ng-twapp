'use strict';
/**
 * @ngdoc controller
 * @name mytmoNgApp.calendarPickerModuleController
 * @description # calendarPickerModuleController
 */

angular.module('mytmoNgApp')
    .controller('WeatherCtrl', function ($scope, weatherService) {
    $scope.weather = weatherService.getWeather();
});
