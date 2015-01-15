'use strict';
/**
 * @ngdoc service
 * @name ng-twapp.login.loginService
 * @description # loginService
 */

angular.module('ng-twapp.login').factory('LoginService', function ($q, $http, Restangular) {
  // Public API
  var factory = {};
  var baseUrl = 'http://54.88.193.44:8888/api/';
  //var baseUrl = 'http://localhost:3000/';

  factory.getAllUsers = function () {
    return Restangular.all('users').getList();
  };


  factory.loginUser = function(data){
    Restangular.oneUrl('user', data).get().then(function(response){
      console.log(response.plain());
    });
  };

  factory.postUser = function () {
    var user = {
      'firstName': 'James',
      'lastName': 'Deen',
      'primaryEmail': 'JamesD@gmail.com',
      'password': 'welcome'
    };
    $http({
      url: baseUrl + 'users',
      method: 'POST',
      data: user
    }).then(function (postedUser) {
      console.log('Success' + postedUser);
    });
  };

  factory.putUser = function (data) {
    Restangular.one('users', data.id).customPUT(
      {'firstName': data.name,
        'lastName': data.lastName
      });
  };

  return factory;

});
