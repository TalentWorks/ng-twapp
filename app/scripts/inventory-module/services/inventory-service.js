'use strict';
/**
 * @ngdoc module
 * @name  ng-twapp.inventory
 * @description # Sample service that could return all the items required for the list
 */
angular.module('ng-twapp.inventory').service('inventoryService', function () {
  return [
    'item1', 'item2'
  ];
});
