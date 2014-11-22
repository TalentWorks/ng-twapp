'use strict';
/**
 * @ngdoc filter
 * @name ng-twapp.filter
 * @file filter-module-filter.js
 * @description # rangeFilter
 */

angular.module('ng-twapp.filter')
  .filter('rangeFilter', function() {
    return function(data, dataFilter) {
      var lengthValue = Object.keys(dataFilter)
        .length;
      if (lengthValue > 1) {
        var filterKey = dataFilter.columnFilter;
        var min = dataFilter.minValue;
        var max = dataFilter.maxValue;
        var startRange = '';
        var endRange = '';
        var filtered = [];
        switch (filterKey) {
        case 'date':
          startRange = new Date(min);
          endRange = new Date(max);
          break;
        case 'price':
          startRange = parseInt(min);
          endRange = parseInt(max);
          break;
        }
        angular.forEach(data, function(value) {
          if ((value[filterKey]) >= startRange && (value[filterKey]) <= endRange) {
            filtered.push(value);
          }
        });
        return filtered;
      } else {
        return data;
      }

    };
  });
