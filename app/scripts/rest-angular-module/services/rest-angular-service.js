'use strict';
/**
 * @ngdoc config
 * @name ng-twapp.restNgSerevice
 * @description  The restNgSerevice requires:
 * after: restNgSerevice.
 */
angular.module('ng-twapp.RestAngular').factory('restNgService', function ($q, $http, Restangular) {
  var factory = {};

  factory.getAllUsers = function () {
    var users = Restangular.all('users').getList();
    return users;
  };

  factory.getOneUser = function (id) {
    var user = Restangular.one('users', id).get();
    return user;
  };

  factory.getSeveralUser = function (ids) {
    var severalUser = Restangular.several('users', ids).getList();
    return severalUser;
  };

  return factory;
});
