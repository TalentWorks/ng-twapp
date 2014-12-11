'use strict';
/**
 * @ngdoc service
 * @name ng-twapp.login.loginService
 * @description # loginService
 */

angular.module('ng-twapp.login').factory('LoginService', function ($q, $http, Restangular) {
  // Public API
  var factory = {};
  //var baseUrl = 'http://54.174.36.93:8888';
  //var baseUrl = 'http://localhost:3000/api/';

  factory.getAllUsers = function () {
    return Restangular.all('/api/users').getList();
  };


  factory.loginUser = function(data){
    Restangular.oneUrl('user', data).get().then(function(response){
      console.log(response.plain());
    });
  };

  factory.postUser = function (data) {
    Restangular.all('api/users').post('users', data);
  };

  factory.putUser = function (data) {
    Restangular.one('users', data.id).customPUT(
      {'firstName': data.name,
        'lastName': data.lastName
      });
  };

  return factory;

});
