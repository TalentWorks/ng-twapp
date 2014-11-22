'use strict';
/**
 * @ngdoc config
 * @name ng-twapp.restNgSerevice
 * @description  The restNgSerevice requires:
 * after: restNgSerevice.
 */
angular.module('ng-twapp.modal').factory('restNgSerevice', function ($q, $http, Restangular) {
  var factory = {};
  // Only stating the main reusable route
  var users = Restangular.all('users');

  factory.getUsers = function () {
    return users;
  };

  factory.getOne = function (id) {
    var user = Restangular.one('users', id);
    return user;
  };

  return factory;
});
