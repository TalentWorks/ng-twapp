'use strict';
/**
 * @ngdoc module
 * @name ng-twapp
 * @file weather-config.js
 * @description # ng-twapp WeatherCtrl module loader
 */
angular.module('ng-twapp').config(function ($stateProvider, $urlRouterProvider) {
  //http://api.openweathermap.org/data/2.5/weather?q=seattle,usa
  $stateProvider.state('weather1', {
    url: '/weather1',
    templateUrl: 'scripts/shared-modules/weather-module/views/weather.html',
    controller: 'WeatherCtrl'
  });

  $urlRouterProvider.otherwise('/');
});
