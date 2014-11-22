'use strict';
/**
 * @ngdoc service
 * @name ng-twapp.filterService
 * @description # filterService
 */

angular.module('ng-twapp.filter')
  .service('filterService', function($http, $q, $filter, URL_CONSTS) {
    this.getFilterData = function() {
      var deferred = $q.defer();
      $http.get(URL_CONSTS.FILTER_URL)
        .success(function(data) {
          var updatedData = [];
          angular.forEach(data, function(value) {
            value.date = new Date(value.date);
            updatedData.push(value);
          });
          deferred.resolve(updatedData);
        })
        .error(function() {
          deferred.reject();
        });
      return deferred.promise;
    };
  });
