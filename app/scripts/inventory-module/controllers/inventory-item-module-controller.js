'use strict';
/**
 * @ngdoc module
 * @name  ng-twapp.inventory
 * @description # ng-twapp inventory controller per item
 */
angular.module('ng-twapp.inventory').controller('InventoryItemController', function ($stateParams) {
  var self = this;
  self.itemId = $stateParams.itemID;
});
