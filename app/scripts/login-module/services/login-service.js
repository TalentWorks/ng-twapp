'use strict';
/**
 * @ngdoc service
 * @name ng-twapp.loginService
 * @description # loginService
 */

angular.module('ng-twapp')
    .service('loginService', function ($rootScope, $scope, $http) {
      // Public API
      var service = {};

      var generateCommonAPIHeaders = function () {
        return {
          "Content-Type": "application/json"
        };
      };

      service.getUsers = function () {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url:'localhost:9005/api/users',
          headers: generateCommonAPIHeaders()
        }).then(function (response) {
              deferred.resolve(response);
            });
        return deferred.promise;
      };

      service.getUsersById = function (id) {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url:'localhost:9005/api/users' + id,
          headers: generateCommonAPIHeaders()
        }).then(function (response) {
              deferred.resolve(response);
            });
        return deferred.promise;
      };

      service.createNewUser = function (userData) {
        var deferred = $q.defer();
        $http({
          method: "POST",
          data: userData,
          url:'localhost:9005/api/users',
          headers: generateCommonAPIHeaders()
        })
            .success(function (response) {
              deferred.resolve(response._id);
            })
            .error(function (data, status) {
              deferred.reject(status);
            });
        return deferred.promise;
      }

      return service;

    });