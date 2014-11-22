'use strict';
/**
 * @ngdoc factory
 * @name ng-twapp.UserService
 * @description # UserService
 */

angular.module('ng-twapp.common-api').factory('UserService', function ($q, $http) {
  console.log('UserService');

  return {
    getUser: function () {
      return {userName: 'jsmith'};
    },
    authenticate: function () {
      return true;
    },
    getUsers: function () {
      var deferred = $q.defer();
      $http.get('/scripts/shared-modules/common-api-module/services/user-data.json').success(function (data) {
        deferred.resolve(data);
      }).error(function () {
        deferred.reject();
      });
      return deferred.promise;
    },
    getUserContent: function () {
      var deferred = $q.defer();
      $http.get('/scripts/shared-modules/common-api-module/services/user-content.html').success(function (data) {
        deferred.resolve(data);
      }).error(function () {
        deferred.reject();
      });
      return deferred.promise;
    }

  };
});
