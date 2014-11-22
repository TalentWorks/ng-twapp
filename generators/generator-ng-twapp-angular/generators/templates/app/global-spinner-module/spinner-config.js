'use strict';
/**
 * @ngdoc module
 * @name <%= appName %>
 * @file spinner-config.js
 * @description <%= appName %> spinner module loader
 */

angular.module('<%= appName %>')
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('SpinnerHttpInterceptorFactory');
  });
