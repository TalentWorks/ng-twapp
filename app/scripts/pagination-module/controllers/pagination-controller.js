'use strict';
/**
 * @ngdoc module
 * @name  ng-twapp.pagination.PaginationExampleController
 * @description # Controller for the pagination example.
 */

angular.module('ng-twapp.pagination')
  .controller('PaginationExampleController', function ($scope) {
    function setupItems() {
      var allItems = [];
      for (var i = 0; i < 100; i++) {
        var item = {
          number: i,
          numSquared: i * i
        };
        allItems.push(item);
      }
      return allItems;
    }

    $scope.items = setupItems();
    $scope.totalItems = $scope.items.length;
    $scope.currentPage = 1;
    $scope.numPerPage = 5;

    $scope.paginate = function (value) {
      var begin = ($scope.currentPage - 1) * $scope.numPerPage;
      var end = begin + $scope.numPerPage;
      var index = $scope.items.indexOf(value);
      return (begin <= index && index < end);
    };

  });
