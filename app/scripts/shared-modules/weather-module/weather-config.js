'use strict';
/**
 * @ngdoc module
 * @name mytmoNgApp
 * @file weather-config.js
 * @description # mytmoNgApp WeatherCtrl module loader
 */

angular.module('mytmoNgApp')
    .config(function ($stateProvider, $urlRouterProvider) {
       //http://api.openweathermap.org/data/2.5/weather?q=seattle,usa
        $stateProvider.state('weather1', {
            url: '/weather1',
            templateUrl: 'scripts/shared-modules/weather-module/views/weather.html',
            controller: 'WeatherCtrl'
        });

        $urlRouterProvider.otherwise('/');
    });