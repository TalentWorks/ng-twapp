'use strict';
/**
 * @ngdoc module
 * @name  ng-twapp.inventory
 * @description # ng-twapp inventory controller for the module
 */
angular.module('ng-twapp.inventory').controller('InventoryController', function () {
  var self = this;
  var items = [];
  self.items = items;
  self.sideBar = true;
});
