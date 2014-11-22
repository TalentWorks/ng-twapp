'use strict';
/**
 * @ngdoc controller
 * @name ng-twapp.filter.FilterController
 * @description # FilterController
 */

angular.module('ng-twapp.filter')
  .controller('FilterController', function ($scope, filterService) {
    $scope.sortOrder = 'type';
    $scope.showColumnFilter = 'type';
    // Service call to get data
    filterService.getFilterData()
      .then(function(data) {
        $scope.completeList = data;
      });
    $scope.filterByRange = {};

    // Apply Filter to display sorted data
    $scope.applyFilter = function(applyFilter, filterType) {
      if (typeof applyFilter !== 'undefined' && Object.keys(applyFilter)
          .length > 0) {
        if (filterType === 'price') {
          $scope.rangeFilterValue.startRange = applyFilter.startRange;
          $scope.rangeFilterValue.endRange = applyFilter.endRange;
        }
        $scope.filterByRange = {
          columnFilter: filterType,
          minValue: applyFilter.startRange,
          maxValue: applyFilter.endRange
        };
      }
    };

    // Sort Table data
    $scope.tableSort = function(columnType, columnFlag) {
      $scope.sortOrder = (columnFlag) ? columnType : ('-' + columnType);
      $scope.showColumnFilter = columnType;
      switch (columnType) {
        case 'type':
          $scope.sortType = (columnFlag) ? false : true;
          break;
        case 'name':
          $scope.sortName = (columnFlag) ? false : true;
          break;
        case 'date':
          $scope.sortDate = (columnFlag) ? false : true;
          break;
        case 'price':
          $scope.sortPrice = (columnFlag) ? false : true;
          break;
        case 'auth':
          $scope.sortAuth = (columnFlag) ? false : true;
          break;
      }

    };
    // Apply watch on range slider
    $scope.$watch('[rangeFilterValue.startRange,rangeFilterValue.endRange]', function(newValues) {
      $scope.priceFilter = {};
      var applyPriceChanges = {};
      applyPriceChanges.startRange = newValues[0];
      applyPriceChanges.endRange = newValues[1];
      $scope.applyFilter(applyPriceChanges, 'price');
    }, true);

    // Reset all Filter
    $scope.clearFilter = function() {
      $scope.rangeFilterValue = {
        startRange: 0,
        endRange: 100
      };
      $scope.searchText = '';
      $scope.filterByRange = {};
      $scope.filterValue = '';
      $scope.rangeFilter = '';
      $scope.priceFilter = {};
      $scope.dateFilter = {};

    };
  });
