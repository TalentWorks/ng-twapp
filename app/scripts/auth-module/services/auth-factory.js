'use strict';
/**
 * @ngdoc factory
 * @name ng-twapp.auth-factory
 * @description # auth-factory
 */

angular.module('ng-twapp.auth')
  .factory('authFactory', function ($q, $http, $rootScope) {
    // Public API
    var factory = {};
    var serviceBase = 'https://66.94.14.141/oauth2-api/p/v1/token';
    $rootScope.isAuthenticated = false;

    factory.all = function () {
      var deferred = $q.defer(),
        httpPromise = $http.get('http://localhost:9005/api/users');

      httpPromise.success(function (users) {
        deferred.resolve(users);
      })
        .error(function (error) {
          console.error('Error: ' + error);
        });

      return deferred.promise;
    };

    factory.getToken = function (code) {
      var lsCode = localStorage.getItem('code');
      code = (lsCode) ? lsCode : code;

      var deferred = $q.defer(),
        httpPromise = $http({
          method: 'POST',
          url: serviceBase + '?grant_type=authorization_code&redirect_uri=http%3A%2F%2Flocalhost:9000&code=' + code,
          headers: {
            'access_token': 'Basic QS04bi1fbHBxU09yXzpYek1Rbkh2UWJV',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });

      httpPromise.success(function (authenticated) {
        console.log('httpPromise.success :: ', authenticated);
        $rootScope.isAuthenticated = true;
        deferred.resolve(authenticated);
      })
        .error(function (error) {
          console.error('Error: ' + error);
        });

      return deferred.promise;
    };

    factory.save = function (data) {
      localStorage.setItem('code', data.code);
    };

    return factory;
  });
/*
 POST https://66.94.14.141/oauth2-api/p/v1/token?grant_type=authorization_code&code=6rr4lAibUggZNyVU6aG1&redirect_uri=https%3A%2F%2Ftmo.io HTTP/1.1
 Accept-Encoding: gzip,deflate
 Authorization: Basic QS05bi1fbHBxU09yXzo4VnA3V0NUVlZ1 //Base-64 encoded clientid:secret QS04bi1fbHBxU09yXzpYek1Rbkh2UWJV
 Content-Type: application/x-www-form-urlencoded
 Content-Length: 0
 Host: 66.94.14.141
 Connection: Keep-Alive
 User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
 */
