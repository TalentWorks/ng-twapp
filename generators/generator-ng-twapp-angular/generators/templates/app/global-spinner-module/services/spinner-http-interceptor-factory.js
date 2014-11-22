'use strict';
/**
 * @ngdoc factory
 * @name <%= appName %>.SpinnerHttpInterceptorFactory
 * @description A factory for the <%= appName %> module.
 */
angular.module('<%= appName %>')
  .factory('SpinnerHttpInterceptorFactory', function($q, $rootScope, $timeout) {
    var numRequests = 0;
    var timerId;
    var hide = function(r) {
      if (!--numRequests) {
        $rootScope.loading = false;
        $timeout.cancel(timerId);
      }
      return r;
    };

    var factory = {};
    factory.request = function(config) {
      numRequests++;
      if (numRequests === 1) {
        timerId = $timeout(function() {
          $rootScope.loading = true;
        }, 500);
      }
      return config;
    };

    factory.response = function(response) {
      return hide(response);
    };

    factory.responseError = function(response) {
      return $q.reject(hide(response));
    };

    return factory;
  });
