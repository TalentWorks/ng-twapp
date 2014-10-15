'use strict';
/**
 * @ngdoc factory
 * @name ng-twapp.login-factory
 * @description # login-factory
 */

angular.module('ng-twapp')
    .factory('loginFactory', function ($q, $http) {
      // Public API
      var factory = {};
      var serviceBase = 'http://localhost:9005/';

      factory.all = function() {
        var deferred = $q.defer(),
            httpPromise = $http.get('http://localhost:9005/api/users');

        httpPromise.success(function (users) {
          deferred.resolve(users);
        })
            .error(function (error) {
              console.error('Error: ' + error);
            });

        return deferred.promise;
      }

      factory.find = function(id) {
        var deferred = $q.defer(),
            httpPromise =  $http({
              method: "GET",
              url: serviceBase + 'api/users/' + id,
              headers: {
                'access_token': 'Basic '+ id}
            });
        httpPromise.success(function (users) {
          deferred.resolve(users);
        })
            .error(function (error) {
              console.error('Error: ' + error);
            });

        return deferred.promise;
      }

      factory.login = function(password, username) {
        var deferred = $q.defer(),
            httpPromise =  $http({
              method: "GET",
              url: serviceBase + 'api/users/' + password + username,
              headers: {
                'access_token': 'Basic '+ id}
            });
        httpPromise.success(function (users) {
          deferred.resolve(users);
        })
            .error(function (error) {
              console.error('Error: ' + error);
            });

        return deferred.promise;
      }

      factory.add = function(data) {
        var deferred = $q.defer(),
            httpPromise =  $http({
              method: "POST",
              data: data,
              url:  serviceBase + 'api/users',
              headers: {'Content-Type': 'application/json'}
            });

        httpPromise.success(function (data) {
          deferred.resolve(data);
        })
            .error(function (error) {
              console.error('Error: ' + error);
            });

        return deferred.promise;
      }

      return factory;
    });
