'use strict';
/**
 * @ngdoc filter
 * @name ng-twapp.calendarDirective
 * @file weather-filter.js
 * @description # weather-filter
 */

angular.module('ng-twapp').filter('temp', function ($filter) {
  return function (input, precision) {
    if (!precision) {
      precision = 1;
    }
    var numberFilter = $filter('number');
    return numberFilter(input, precision) + '\u00B0F';
  };
});
