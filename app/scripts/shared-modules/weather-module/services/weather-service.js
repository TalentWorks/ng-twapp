'use strict';
/**
 * @ngdoc service
 * @name ng-twapp.weatherService
 * @file weather-service.js
 * @description # weatherService
 */
angular.module('ng-twapp').factory('weatherService', function ($http, $q) {
  return {
    getWeather: function () {
      var deferred = $q.defer();
      var weather = {temp: {}, clouds: null};
      var promise = $http.get('http://api.openweathermap.org/data/2.5/weather?id=5809844&units=imperial').success(function (data) {
        if (data) {
          if (data.main) {
            weather.temp.current = data.main.temp;
            weather.temp.min = data.main.temp_min;
            weather.temp.max = data.main.temp_max;
          }
          weather.clouds = data.clouds ? data.clouds.all : undefined;
          deferred.resolve(weather);
        }
      });
      promise = weather;
      return promise;
    }
  };
});
