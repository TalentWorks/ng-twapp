'use strict';
/**
 * @ngdoc module
 * @name
 * @file
 * @description #
 */

angular.module('ng-twapp.autocomplete', [])
  .config(function () {
  }).constant('AUTOCOMPLETE_URL_CONSTS', {
    'AUTOCOMPLETE': '/scripts/autocomplete-module/services/autocomplete-data.json'
  });

//angular.module('ng-twapp').config(function ($stateProvider, $urlRouterProvider) {
//  //http://api.openweathermap.org/data/2.5/weather?q=seattle,usa
//  $stateProvider.state('weather1', {
//    url: '/weather1',
//    templateUrl: 'scripts/shared-modules/weather-module/views/weather.html',
//    controller: 'WeatherCtrl'
//  });
//
//  $urlRouterProvider.otherwise('/');
//});
