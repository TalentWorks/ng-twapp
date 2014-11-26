'use strict';
/**
 * @author Jose F. Sosa
 * @ngdoc factory
 * @name ng-twapp.common-api.FormDataService
 * @description # FormDataService
 */

angular.module('ng-twapp.common-api').factory('FormDataService', function ($q, $http) {
  // Public API
  var factory = {};

  factory.getCategories = function () {
    var deferred = $q.defer();
    $http.get('/data/category.json').success(function (data) {
      deferred.resolve(data);
    }).error(function () {
      deferred.reject();
    });
    return deferred.promise;
  };

  factory.getUnions = function () {
    var deferred = $q.defer(),
      httpPromise = $http.get('/data/unions.json');
    httpPromise.success(function (users) {
      deferred.resolve(users);
    })
      .error(function (error) {
        console.error('Error: ' + error);
      });
    return deferred.promise;
  };

  factory.getStates = function () {
    var deferred = $q.defer(),
      httpPromise = $http.get('/data/states-usa.json');
    httpPromise.success(function (users) {
      deferred.resolve(users);
    })
      .error(function (error) {
        console.error('Error: ' + error);
      });
    return deferred.promise;
  };


  return factory;

});
