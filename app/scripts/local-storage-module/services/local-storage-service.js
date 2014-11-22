'use strict';
/**
 * @ngdoc factory
 * @name ng-twapp.storage-factory
 * @description # storage-factory
 */

angular.module('ng-twapp.localstore')
  .factory('storageFactory', function () {
    // Public API
    var factory = {};

    factory.all = function () {
      localStorage.getItem('todos');
    };

    factory.count = function () {
      var allItems = localStorage.getItem('todos');
      var count = 0;
      angular.forEach(allItems, function (todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    factory.save = function (data) {
      localStorage.setItem('todos', JSON.stringify(data));
    };

    return factory;
  });
